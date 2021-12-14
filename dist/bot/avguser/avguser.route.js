"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageUserFunction = void 0;
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const constants_1 = require("../../core/constants");
const grammy_1 = require("grammy");
const bot = bot_service_1.BotService.getInstance();
function averageUserFunction() {
    const bot = bot_service_1.BotService.getInstance();
    const router = bot_service_1.BotService.getRouter();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const reportingPeriods = new api_1.ReportingPeriods(constants_1.constants.accessToken);
    const marks = new api_1.Marks(constants_1.constants.accessToken);
    const eduGroups = new api_1.EduGroups(constants_1.constants.accessToken);
    bot.callbackQuery("avg_user", async (ctx) => {
        ctx.session.route = "avg_user_input";
        const msg = await ctx.editMessageText("Введите PersonId пользователя (одноклассника), чтобы посмотреть среднюю оценку!");
        ctx.session.customData.toRemove = {
            id: msg.message_id,
            chatId: msg.chat.id,
        };
    });
    router.route("avg_user_input", async (ctx) => {
        var _a, _b;
        ctx.session.route = "";
        const personIdInput = parseInt((_b = (_a = ctx.msg) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "", 10);
        if (ctx.msg) {
            ctx.deleteMessage();
        }
        if (ctx.session.customData.toRemove) {
            await ctx.api.deleteMessage(ctx.session.customData.toRemove.chatId, ctx.session.customData.toRemove.id);
            delete ctx.session.customData.toRemove;
        }
        if (isNaN(personIdInput)) {
            await ctx.reply("Это неверный формат PersonId!", {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            });
            return;
        }
        const msg = await ctx.reply("⌛ Ожидайте... выполняем поиск");
        const contextRes = await context.me();
        const eduGroupsRes = await eduGroups.groupsWithStudents([contextRes.body.eduGroups[0].id_str]);
        const periodRes = await reportingPeriods.periods(contextRes.body.eduGroups[0].id_str);
        const found = eduGroupsRes.body[0].students.find((student) => {
            return student.person.id_str == personIdInput.toString();
        });
        if (found) {
            const markRes = await marks.avgMark(periodRes.body[0].id_str, personIdInput);
            ctx.api.editMessageText(msg.chat.id, msg.message_id, `Средний балл пользователя  <code>${found.person.shortName}</code> (ID:  <code>${personIdInput}</code>) за текущий ${periodRes.body[0].type}:  <code>${markRes.body}</code>`, {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
                parse_mode: "HTML",
            });
        }
        else {
            await ctx.api.editMessageText(msg.chat.id, msg.message_id, `Извините, указанный Вами пользователь не найден!`, {
                reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            });
        }
    });
}
exports.averageUserFunction = averageUserFunction;
//# sourceMappingURL=avguser.route.js.map