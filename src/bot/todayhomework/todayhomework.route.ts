import { constants } from "../../core/constants";
import { BotService } from "../../core/services/bot/bot.service";
import { Context, EduGroups, Persons, Homeworks, Users } from "../../api";
import { unixTimestampConverter } from "../../core/utils/unixTimestampConverter";
import { InlineKeyboard } from "grammy";

export function todayHomeworkCommand() {
	const bot = BotService.getInstance();
	const context = new Context(constants.accessToken);
	const eduGroups = new EduGroups(constants.accessToken);
	const persons = new Persons(constants.accessToken);
	const homeworks = new Homeworks(constants.accessToken);
	const users = new Users(constants.accessToken);
	bot.callbackQuery(/todayhomework ((([1-9])|([1-3][0-9]))-((?:JAN)|(?:FEB)|(?:MAR)|(?:APR)|(?:MAY)|(?:JUN)|(?:JUL)|(?:AUG)|(?:SEP)|(?:OCT)|(?:NOV)|(?:DEC))-[2][0][1-2][0-9]$)/, async (ctx) => {
		const date = ctx.match[1] ? ctx.match[1] : unixTimestampConverter(Date.now());
		const contextRes = await context.me();
		const homeworksRes = await homeworks.me(contextRes.body.schoolIds[0], date, date);
		let stringBuilder = `Домашнее задание за ${date}\n\n`;
		for (let [index, homework] of homeworksRes.body.works.entries()) {
			const lesson = homeworksRes.body.lessons.find((lesson) => {
				return lesson.subjectId == homework.subjectId;
			});
			const subject = homeworksRes.body.subjects.find((subject) => {
				return subject.id == homework.subjectId;
			});
			const userRes = await users.user(homework.createdBy);
			stringBuilder += `${index + 1}. ${subject.name}\n`;
			stringBuilder += `Тема: ${lesson.title ? lesson.title : "Пусто"}\n`;
			stringBuilder += `Задание: ${homework.text}\n`;
			stringBuilder += `Учитель: ${userRes.body.shortName}\n`;
			stringBuilder += `Кабинет: ${subject.knowledgeAreaId}\n`;
			stringBuilder += `${homework.oneDriveLinks.length ? `Файлы: ${homework.oneDriveLinks.join(" , ")}\n\n` : "\n"}`;
		}
		await ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard()
				.text("◀️", `todayhomework ${unixTimestampConverter(Date.parse(date) - 24 * 60 * 60 * 1000)}`)
				.text("▶️", `todayhomework ${unixTimestampConverter(Date.parse(date) + 24 * 60 * 60 * 1000)}`)
				.row()
				.text("Назад", "menu"),
		});
	});
}
