"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageMeFunction = void 0;
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const constants_1 = require("../../core/constants");
const grammy_1 = require("grammy");
function averageMeFunction() {
    const bot = bot_service_1.BotService.getInstance();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const reportingPeriods = new api_1.ReportingPeriods(constants_1.constants.accessToken);
    const marks = new api_1.Marks(constants_1.constants.accessToken);
    bot.callbackQuery("avg_me", async (ctx) => {
        await ctx.editMessageText("⌛ Ожидайте... выполняем поиск");
        const contextRes = await context.me();
        const periodRes = await reportingPeriods.periods(contextRes.body.eduGroups[0].id_str);
        const markRes = await marks.avgMark(periodRes.body[0].id_str, contextRes.body.personId);
        ctx.editMessageText(`Ваш средний балл за текущий ${periodRes.body[0].type}: ${markRes.body}`, {
            reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
        });
    });
}
exports.averageMeFunction = averageMeFunction;
//# sourceMappingURL=avgme.route.js.map