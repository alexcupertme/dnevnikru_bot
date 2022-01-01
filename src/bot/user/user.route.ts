import { constants } from "../../core/constants";
import { BotService } from "../../core/services/bot/bot.service";
import { Context, Users } from "../../api";
import { InlineKeyboard } from "grammy";
import { Message } from "@grammyjs/types";

export function userCommand() {
	const bot = BotService.getInstance();
	const router = BotService.getRouter();
	const context = new Context(constants.accessToken);
	const users = new Users(constants.accessToken);
	bot.callbackQuery("user", async (ctx) => {
		ctx.session.route = "user_input";
		//@ts-ignore
		const msg: Message.CommonMessage = await ctx.editMessageText("Введите UserId пользователя, чтобы посмотреть информацию о нём!");
		ctx.session.customData.toRemove = {
			id: msg.message_id,
			chatId: msg.chat.id,
		};
	});
	router.route("user_input", async (ctx) => {
		ctx.session.route = "";
		const userIdInput = parseInt(ctx.msg?.text ?? "", 10);
		if (ctx.msg) {
			await ctx.deleteMessage();
		}
		if (ctx.session.customData.toRemove) {
			try {
				await ctx.api.deleteMessage(ctx.session.customData.toRemove.chatId, ctx.session.customData.toRemove.id);
			} catch (e) {}
			delete ctx.session.customData.toRemove;
		}
		if (isNaN(userIdInput)) {
			await ctx.reply("Это неверный формат UserId!", {
				reply_markup: new InlineKeyboard().text("Назад", "menu"),
			});
			return;
		}
		const msg = await ctx.reply("⌛ Ожидайте... выполняем поиск");
		const contextRes = await context.user(userIdInput);
		const userRes = await users.user(userIdInput);
		if (contextRes && userRes && !contextRes.response.body?.includes("not found")) {
			let stringBuilder = "Информация о пользователе:\n\n";
			stringBuilder += `🔥 Имя: <code>${userRes.body.shortName}</code>\n\n`;
			stringBuilder += `🔥 Логин: <code>${userRes.body.login ? userRes.body.login : "Нет доступа"}</code>\n\n`;
			stringBuilder += `🏫 Школа: <code>${contextRes.body.schools ? contextRes.body.schools[0].name : "Не указана"}</code>\n\n`;
			stringBuilder += `🖼️ Аватар: ${contextRes.body.avatarUrl ? contextRes.body.avatarUrl : "Не установлен"}\n\n`;
			stringBuilder += `🕵️ Айди персоны: <code>${userRes.body.personId_str}</code>\n\n`;
			stringBuilder += `👤 Айди юзера: <code>${userRes.body.id_str}</code>\n\n`;
			stringBuilder += `📜 Роли: ${userRes.body.roles ? userRes.body.roles.join(", ") : "Нет доступа"}\n\n`;
			stringBuilder += `🎂 День рождения: ${userRes.body.birthday}\n\n`;
			stringBuilder += `📧 Email: <code>${userRes.body.email ? userRes.body.email : "Нет доступа"}</code>\n\n`;
			await ctx.api.editMessageText(msg.chat.id, msg.message_id, stringBuilder, {
				reply_markup: new InlineKeyboard().text("Назад", "menu"),
				parse_mode: "HTML",
			});
		} else
			await ctx.api.editMessageText(msg.chat.id, msg.message_id, `Извините, указанный Вами пользователь не найден!`, {
				reply_markup: new InlineKeyboard().text("Назад", "menu"),
			});
	});
}
