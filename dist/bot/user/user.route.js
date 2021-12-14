"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCommand = void 0;
const constants_1 = require("../../core/constants");
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const grammy_1 = require("grammy");
function userCommand() {
    const bot = bot_service_1.BotService.getInstance();
    const router = bot_service_1.BotService.getRouter();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const users = new api_1.Users(constants_1.constants.accessToken);
    bot.callbackQuery("user", async (ctx) => {
        ctx.session.route = "user_input";
        const msg = await ctx.editMessageText("Введите UserId пользователя, чтобы посмотреть информацию о нём!");
        ctx.session.customData.toRemove = {
            id: msg.message_id,
            chatId: msg.chat.id,
        };
    });
    router.route("user_input", async (ctx) => {
        var _a, _b, _c;
        ctx.session.route = "";
        const userIdInput = parseInt((_b = (_a = ctx.msg) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "", 10);
        if (ctx.msg) {
            await ctx.deleteMessage();
        }
        if (ctx.session.customData.toRemove) {
            await ctx.api.deleteMessage(ctx.session.customData.toRemove.chatId, ctx.session.customData.toRemove.id);
            delete ctx.session.customData.toRemove;
        }
        if (isNaN(userIdInput)) {
            await ctx.reply("Это неверный формат UserId!", {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            });
            return;
        }
        const msg = await ctx.reply("⌛ Ожидайте... выполняем поиск");
        const contextRes = await context.user(userIdInput);
        const userRes = await users.user(userIdInput);
        if (contextRes && userRes && !((_c = contextRes.response.body) === null || _c === void 0 ? void 0 : _c.includes("not found"))) {
            let stringBuilder = "Информация о пользователе:\n\n";
            stringBuilder += `🔥 Имя: <code>${userRes.body.shortName}</code>\n\n`;
            stringBuilder += `🔥 Логин: <code>${userRes.body.login ? userRes.body.login : "Нет доступа"}</code>\n\n`;
            stringBuilder += `🏫 Школа: <code>${contextRes.body.schools ? contextRes.body.schools[0].name : "Не указана"}</code>\n\n`;
            stringBuilder += `🖼️ Аватар: ${contextRes.body.avatarUrl ? contextRes.body.avatarUrl : "Не установлен"}\n\n`;
            stringBuilder += `🕵️ Айди персоны: <code>${userRes.body.personId_str}</code>\n\n`;
            stringBuilder += `👤 Айди юзера: <code>${userRes.body.id_str}</code>\n\n`;
            stringBuilder += `📜 Роли: ${userRes.body.roles ? userRes.body.roles.join(", ") : "Нет доступа"}\n\n`;
            stringBuilder += `🎂 День рождения: ${userRes.body.birthday}\n\n`;
            stringBuilder += `📧 Email: <code>${userRes.body.email ? userRes.body.email : "Нет доступа"}</code>\n\n`;
            await ctx.api.editMessageText(msg.chat.id, msg.message_id, stringBuilder, {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
                parse_mode: "HTML",
            });
        }
        else
            await ctx.api.editMessageText(msg.chat.id, msg.message_id, `Извините, указанный Вами пользователь не найден!`, {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            });
    });
}
exports.userCommand = userCommand;
//# sourceMappingURL=user.route.js.map