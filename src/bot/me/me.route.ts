import { BotService } from "../../core/services/bot/bot.service";
import { Context, Users } from "../../api";
import { constants } from "../../core/constants";
import { InlineKeyboard } from "grammy";

export function meCommand() {
	const bot = BotService.getInstance();
	const context = new Context(constants.accessToken);
	const users = new Users(constants.accessToken);
	bot.callbackQuery("me", async (ctx) => {
		await ctx.editMessageText("⌛ Ожидайте... выполняем поиск");
		const contextRes = await context.me();
		const userRes = await users.me();
		let stringBuilder = "Информация о Вас:\n\n";
		stringBuilder += `🔥 Ваше имя:  <code>${contextRes.body.shortName}</code>\n\n`;
		stringBuilder += `🔥 Логин:  <code>${userRes.body.login}</code>\n\n`;
		stringBuilder += `🏫 Школа:  <code>${contextRes.body.schools[0].name}</code>\n\n`;
		stringBuilder += `🖼️ Аватар: ${contextRes.body.avatarUrl ? contextRes.body.avatarUrl : "Не установлен"}\n\n`;
		stringBuilder += `🕵️ Айди персоны:  <code>${contextRes.body.personId}</code>\n\n`;
		stringBuilder += `👤 Айди юзера:  <code>${contextRes.body.userId}</code>\n\n`;
		stringBuilder += `📜 Роли: ${contextRes.body.roles.join(", ")}\n\n`;
		stringBuilder += `🎂 День рождения: ${userRes.body.birthday}\n\n`;
		stringBuilder += `📧 Email:  <code>${userRes.body.email}</code>\n\n`;
		await ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard().text("Назад", "menu"),
			parse_mode: "HTML",
		});
	});
}
