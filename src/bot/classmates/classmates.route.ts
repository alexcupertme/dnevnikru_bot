import { constants } from "../../core/constants";
import { BotService } from "../../core/services/bot/bot.service";
import { Context, EduGroups, Persons } from "../../api";
import { InlineKeyboard } from "grammy";

export function classmatesCommand() {
	const bot = BotService.getInstance();
	const context = new Context(constants.accessToken);
	const eduGroups = new EduGroups(constants.accessToken);
	const persons = new Persons(constants.accessToken);
	bot.callbackQuery("classmates", async (ctx) => {
		await ctx.editMessageText("⌛ Ожидайте... выполняем поиск");
		const contextRes = await context.me();
		const eduGroupsRes = await eduGroups.groupsWithStudents([contextRes.body.eduGroups[0].id_str]);
		const personsRes = await persons.classmates(eduGroupsRes.body[0].group.id_str);
		let stringBuilder = `Список одноклассников в группе с ID ${eduGroupsRes.body[0].group.id_str}\n\n`;
		personsRes.body.map((person, index) => {
			stringBuilder += `${index + 1}. Имя:  <code>${person.shortName}</code>\n`;
			stringBuilder += `Айди персоны:  <code>${person.id_str}</code>\n`;
			stringBuilder += `Юзер айди:  <code>${person.userId_str}</code>\n\n`;
		});
		await ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard().text("Назад", "menu"),
			parse_mode: "HTML",
		});
	});
}
