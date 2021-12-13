import { constants } from "../../core/constants";
import { BotService } from "../../core/services/bot.service";
import { UserFeeds } from "../../api";
import { unixTimestampConverter } from "../../core/utils/unixTimestampConverter";
import { InlineKeyboard } from "grammy";

export function todayScheduleCommand() {
	const bot = BotService.getInstance();
	const usersFeeds = new UserFeeds(constants.accessToken);
	bot.callbackQuery(/todayschedule ((([1-9])|([1-3][0-9]))-((?:JAN)|(?:FEB)|(?:MAR)|(?:APR)|(?:MAY)|(?:JUN)|(?:JUL)|(?:AUG)|(?:SEP)|(?:OCT)|(?:NOV)|(?:DEC))-[2][0][1-2][0-9]$)/, async (ctx) => {
		const date = ctx.match[1] ? ctx.match[1] : unixTimestampConverter(Date.now());
		const user = await usersFeeds.me(date);
		let stringBuilder = `Расписание за ${date}\n\n`;
		if (user.body.days[0]) {
			user.body.days[0].todaySchedule.map((lesson, index) => {
				stringBuilder += `${index + 1}. ${lesson.subjectName}\n`;
			});
		} else stringBuilder += `Расписания нет!\n\n`;
		await ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard()
				.text("◀️", `todayschedule ${unixTimestampConverter(Date.parse(date) - 24 * 60 * 60 * 1000)}`)
				.text("▶️", `todayschedule ${unixTimestampConverter(Date.parse(date) + 24 * 60 * 60 * 1000)}`)
				.row()
				.text("Назад", "menu"),
		});
	});
}
