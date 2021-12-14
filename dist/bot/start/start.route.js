"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCommand = void 0;
const grammy_1 = require("grammy");
const bot_service_1 = require("../../core/services/bot.service");
async function startHandlerCmd(ctx) {
    await ctx.reply("Привет. Это неофициальный бот Dnevnik.ru, который позволяет просматривать оценки, аналитику, домашнее задание в real time. Выбери команду на вкладке меню", {
        reply_markup: new grammy_1.InlineKeyboard().text("📙 Помощь", "help").row().text("🖥️ Меню", "menu").row().text("🧑🏻‍💻 О разработчике", "about"),
    });
}
async function startHandlerCb(ctx) {
    await ctx.editMessageText("Привет. Это неофициальный бот Dnevnik.ru, который позволяет просматривать оценки, аналитику, домашнее задание в real time. Выбери команду на вкладке меню", {
        reply_markup: new grammy_1.InlineKeyboard().text("📙 Помощь", "help").row().text("🖥️ Меню", "menu").row().text("🧑🏻‍💻 О разработчике", "about"),
    });
}
function startCommand() {
    const bot = bot_service_1.BotService.getInstance();
    bot.command("start", startHandlerCmd);
    bot.callbackQuery("start", startHandlerCb);
}
exports.startCommand = startCommand;
//# sourceMappingURL=start.route.js.map