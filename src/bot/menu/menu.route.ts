import { unixTimestampConverter } from "../../core/utils/unixTimestampConverter";
import { InlineKeyboard } from "grammy";
import { BotService } from "../../core/services/bot/bot.service";

export function menuRoute() {
	const bot = BotService.getInstance();
	bot.callbackQuery("menu", async (ctx) => {
		ctx.session.route = "menu";
		let stringBuilder = `🖥️ Меню бота`;
		await ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard()
				.text("Одноклассники", "classmates")
				.text("Моя средняя оценка", "avg_me")
				.row()
				.text("Средняя оценка юзера", "avg_user")
				.text("Информация обо мне", "me")
				.row()
				.text("Домашнее задание", `todayhomework ${unixTimestampConverter(Date.now())}`)
				.text("Расписание", `todayschedule ${unixTimestampConverter(Date.now())}`)
				.row()
				.text("Информация о юзере", "user")
				.row()
				.text("⛳ На главную", "start"),
		});
	});
}
