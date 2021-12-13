import { InlineKeyboard } from "grammy";
import { BotService, MyContext } from "../../core/services/bot.service";

async function startHandlerCmd(ctx: MyContext) {
	await ctx.reply("Привет. Это неофициальный бот Dnevnik.ru, который позволяет просматривать оценки, аналитику, домашнее задание в real time. Выбери команду на вкладке меню", {
		reply_markup: new InlineKeyboard().text("📙 Помощь", "help").row().text("🖥️ Меню", "menu").row().text("🧑🏻‍💻 О разработчике", "about"),
	});
}

async function startHandlerCb(ctx: MyContext) {
	await ctx.editMessageText("Привет. Это неофициальный бот Dnevnik.ru, который позволяет просматривать оценки, аналитику, домашнее задание в real time. Выбери команду на вкладке меню", {
		reply_markup: new InlineKeyboard().text("📙 Помощь", "help").row().text("🖥️ Меню", "menu").row().text("🧑🏻‍💻 О разработчике", "about"),
	});
}

export function startCommand() {
	const bot = BotService.getInstance();
	bot.command("start", startHandlerCmd);
	bot.callbackQuery("start", startHandlerCb);
}
