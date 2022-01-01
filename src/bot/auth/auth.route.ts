import { InlineKeyboard, InputFile } from "grammy";
import { Other } from "grammy/out/core/api";
import { BotService, MyContext } from "../../core/services/bot/bot.service";
import fs from "fs";
import path from "path";
import { userModel } from "../../core/schemas/user.schema";
import { CheckAccess, Context, Users } from "../../api";
import { IDBChildren, IDBUser } from "@core/schemas/user.interface";

function authHandlerCb(text: string, options: Record<any, any>) {
	return async function (ctx: MyContext) {};
}

export function authHandler() {
	const bot = BotService.getInstance();
	const router = BotService.getRouter();
	bot.callbackQuery("auth", async (ctx: MyContext) => {
		let photoPath = path.join(__dirname, "../../../static/img/auth_guide.png");
		await ctx.editMessageText(
			`🔑 Для авторизации Вам необходимо соблюдать пошаговую инструкцию.

		1. Перейдите по ссылке https://login.dnevnik.ru/oauth2?response_type=token&client_id=bb97b3e445a340b9b9cab4b9ea0dbd6f&scope=CommonInfo,ContactInfo,FriendsAndRelatives,EducationalInfo
		
		2. Авторизуйтесь на сайте с помощью своего логина и пароля.
		
		3. Дождитесь загрузки страницы и удостоверьтесь в том, что на сайте высветилась табличка "Доступ предоставлен". На <a href="https://imgur.com/a/OyhA8PM">фото</a> ниже показано как выглядит успешный вариант.
		
		4. Скопируйте новую ссылку из адресной строки, перейдите в чат с ботом, нажмите кнопку "Я скопировал", после чего отправьте данную ссылку
		
		5. Проверьте ответ бота. Если авторизация прошла успешна, Вы увидите ответ "Авторизация выполнена под учётной записью 'Имя Ф.' "
		
		Важно! Все действия выполняются через официальный сайт dnevnik.ru , мы не используем Ваши данные в личных целях, все действия выполняются только с согласия пользователя. Данный бот является неофициальным, поэтому мы не несём гарантий за целостность Вашего аккаунта!`,
			{
				reply_markup: new InlineKeyboard().text("Назад", "start").text("Я скопировал", "auth_copied").row(),
				parse_mode: "HTML",
			}
		);
	});
	bot.callbackQuery("auth_copied", async (ctx: MyContext) => {
		ctx.session.route = "auth_copied_input";
		//@ts-ignore
		const msg: Message.CommonMessage = await ctx.editMessageText("Отправьте скопированную ссылку!");
		ctx.session.customData.toRemove = {
			id: msg.message_id,
			chatId: msg.chat.id,
		};
	});
	router.route("auth_copied_input", async (ctx: MyContext) => {
		ctx.session.route = "";
		const urlInputArray = ctx.msg?.text?.match(/access_token\=(.*)&/);
		const accessToken = urlInputArray && urlInputArray[1] ? urlInputArray[1] : "";
		if (ctx.msg) {
			await ctx.deleteMessage();
		}
		if (ctx.session.customData.toRemove) {
			try {
				await ctx.api.deleteMessage(ctx.session.customData.toRemove.chatId, ctx.session.customData.toRemove.id);
			} catch (e) {}
			delete ctx.session.customData.toRemove;
		}
		if (!accessToken || !(accessToken.length == 32)) {
			await ctx.reply("Это неверный формат ссылки!", {
				reply_markup: new InlineKeyboard().text("Назад", "auth"),
			});
			return;
		}
		const msg = await ctx.reply("⌛ Ожидайте... выполняем авторизацию");
		// await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 3000)); # For testing URL validation
		const checkAccess = new CheckAccess(accessToken);
		const res = await checkAccess.default();
		if (!(res.response.statusCode == 401)) {
			const usersInstance = new Users(accessToken);
			const contextInstance = new Context(accessToken);
			const userRes = await usersInstance.me();
			const contextRes = await contextInstance.me();
			const user = await userModel.findOne({ userId: userRes.body.id_str }).exec();

			if (!user) {
				await userModel.create<IDBUser>({
					accessToken,
					userId: userRes.body.id_str,
					personId: userRes.body.personId_str,
					name: { shortName: userRes.body.shortName },
					login: userRes.body.login,
					locale: userRes.body.locale,
					timezone: userRes.body.timezone,
					birthday: userRes.body.birthday,
					email: userRes.body.email,
					roles: userRes.body.roles,
					children: contextRes.body.children,
					schools: contextRes.body.schools,
					eduGroups: contextRes.body.eduGroups,
					lastUpdate: Date.now(),
					registerDate: Date.now(),
				});
			} else {
				await userModel.updateOne({
					accessToken,
					userId: userRes.body.id_str,
					personId: userRes.body.personId_str,
					name: { shortName: userRes.body.shortName },
					login: userRes.body.login,
					locale: userRes.body.locale,
					timezone: userRes.body.timezone,
					birthday: userRes.body.birthday,
					email: userRes.body.email,
					roles: userRes.body.roles,
					children: contextRes.body.children,
					schools: contextRes.body.schools,
					eduGroups: contextRes.body.eduGroups,
					lastUpdate: Date.now(),
				});
			}
		}
		await ctx.api.editMessageText(msg.chat.id, msg.message_id, "Авторизация прошла успешно!", {
			reply_markup: new InlineKeyboard().text("Назад", "start"),
		});
	});
}
