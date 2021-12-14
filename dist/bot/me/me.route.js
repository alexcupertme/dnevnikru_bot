"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meCommand = void 0;
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const constants_1 = require("../../core/constants");
const grammy_1 = require("grammy");
function meCommand() {
    const bot = bot_service_1.BotService.getInstance();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const users = new api_1.Users(constants_1.constants.accessToken);
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
            reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            parse_mode: "HTML",
        });
    });
}
exports.meCommand = meCommand;
//# sourceMappingURL=me.route.js.map