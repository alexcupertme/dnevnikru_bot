import { BotService } from "../../core/services/bot/bot.service";
import { UserFeeds, ReportingPeriods, Marks, Context, EduGroups } from "../../api";
import { constants } from "../../core/constants";
import { InlineKeyboard } from "grammy";
import { Message } from "@grammyjs/types";
const bot = BotService.getInstance();

export function averageUserFunction() {
	const bot = BotService.getInstance();
	const router = BotService.getRouter();
	const context = new Context(constants.accessToken);
	const reportingPeriods = new ReportingPeriods(constants.accessToken);
	const marks = new Marks(constants.accessToken);
	const eduGroups = new EduGroups(constants.accessToken);
	bot.callbackQuery("avg_user", async (ctx) => {
		ctx.session.route = "avg_user_input";
		//@ts-ignore
		const msg: Message.CommonMessage = await ctx.editMessageText("Введите PersonId пользователя (одноклассника), чтобы посмотреть среднюю оценку!");
		ctx.session.customData.toRemove = {
			id: msg.message_id,
			chatId: msg.chat.id,
		};
	});
	router.route("avg_user_input", async (ctx) => {
		ctx.session.route = "";
		const personIdInput = parseInt(ctx.msg?.text ?? "", 10);
		if (ctx.msg) {
			await ctx.deleteMessage();
		}
		if (ctx.session.customData.toRemove) {
			try {
				await ctx.api.deleteMessage(ctx.session.customData.toRemove.chatId, ctx.session.customData.toRemove.id);
			} catch (e) {}
			delete ctx.session.customData.toRemove;
		}
		if (isNaN(personIdInput)) {
			await ctx.reply("Это неверный формат PersonId!", {
				reply_markup: new InlineKeyboard().text("Назад", "menu"),
			});
			return;
		}
		const msg = await ctx.reply("⌛ Ожидайте... выполняем поиск");
		const contextRes = await context.me();
		const eduGroupsRes = await eduGroups.groupsWithStudents([contextRes.body.eduGroups[0].id_str]);
		const periodRes = await reportingPeriods.periods(contextRes.body.eduGroups[0].id_str);
		const found = eduGroupsRes.body[0].students.find((student) => {
			return student.person.id_str == personIdInput.toString();
		});
		if (found) {
			const markRes = await marks.avgMark(periodRes.body[0].id_str, personIdInput);
			await ctx.api.editMessageText(
				msg.chat.id,
				msg.message_id,
				`Средний балл пользователя  <code>${found.person.shortName}</code> (ID:  <code>${personIdInput}</code>) за текущий ${periodRes.body[0].type}:  <code>${markRes.body}</code>`,
				{
					reply_markup: new InlineKeyboard().text("Назад", "menu"),
					parse_mode: "HTML",
				}
			);
		} else {
			await ctx.api.editMessageText(msg.chat.id, msg.message_id, `Извините, указанный Вами пользователь не найден!`, {
				reply_markup: new InlineKeyboard().text("Назад", "menu"),
			});
		}
	});
}
