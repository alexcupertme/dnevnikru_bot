"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRoute = void 0;
const unixTimestampConverter_1 = require("../../core/utils/unixTimestampConverter");
const grammy_1 = require("grammy");
const bot_service_1 = require("../../core/services/bot.service");
function menuRoute() {
    const bot = bot_service_1.BotService.getInstance();
    bot.callbackQuery("menu", async (ctx) => {
        ctx.session.route = "menu";
        let stringBuilder = `🖥️ Меню бота`;
        await ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard()
                .text("Одноклассники", "classmates")
                .text("Моя средняя оценка", "avg_me")
                .row()
                .text("Средняя оценка юзера", "avg_user")
                .text("Информация обо мне", "me")
                .row()
                .text("Домашнее задание", `todayhomework ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.now())}`)
                .text("Расписание", `todayschedule ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.now())}`)
                .row()
                .text("Информация о юзере", "user")
                .row()
                .text("⛳ На главную", "start"),
        });
    });
}
exports.menuRoute = menuRoute;
//# sourceMappingURL=menu.route.js.map