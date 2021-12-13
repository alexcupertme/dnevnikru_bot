import { BotService } from "../../core/services/bot.service";
import { UserFeeds, ReportingPeriods, Marks, Context } from "../../api";
import { constants } from "../../core/constants";
import { InlineKeyboard } from "grammy";

export function averageMeFunction() {
	const bot = BotService.getInstance();
	const context = new Context(constants.accessToken);
	const reportingPeriods = new ReportingPeriods(constants.accessToken);
	const marks = new Marks(constants.accessToken);
	bot.callbackQuery("avg_me", async (ctx) => {
		await ctx.editMessageText("⌛ Ожидайте... выполняем поиск");
		const contextRes = await context.me();
		const periodRes = await reportingPeriods.periods(contextRes.body.eduGroups[0].id_str);
		const markRes = await marks.avgMark(periodRes.body[0].id_str, contextRes.body.personId);
		ctx.editMessageText(`Ваш средний балл за текущий ${periodRes.body[0].type}: ${markRes.body}`, {
			reply_markup: new InlineKeyboard().text("Назад", "menu"),
		});
	});
}
