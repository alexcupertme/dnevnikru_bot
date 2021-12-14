"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todayScheduleCommand = void 0;
const constants_1 = require("../../core/constants");
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const unixTimestampConverter_1 = require("../../core/utils/unixTimestampConverter");
const grammy_1 = require("grammy");
function todayScheduleCommand() {
    const bot = bot_service_1.BotService.getInstance();
    const usersFeeds = new api_1.UserFeeds(constants_1.constants.accessToken);
    bot.callbackQuery(/todayschedule ((([1-9])|([1-3][0-9]))-((?:JAN)|(?:FEB)|(?:MAR)|(?:APR)|(?:MAY)|(?:JUN)|(?:JUL)|(?:AUG)|(?:SEP)|(?:OCT)|(?:NOV)|(?:DEC))-[2][0][1-2][0-9]$)/, async (ctx) => {
        const date = ctx.match[1] ? ctx.match[1] : (0, unixTimestampConverter_1.unixTimestampConverter)(Date.now());
        const user = await usersFeeds.me(date);
        let stringBuilder = `Расписание за ${date}\n\n`;
        if (user.body.days[0]) {
            user.body.days[0].todaySchedule.map((lesson, index) => {
                stringBuilder += `${index + 1}. ${lesson.subjectName}\n`;
            });
        }
        else
            stringBuilder += `Расписания нет!\n\n`;
        await ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard()
                .text("◀️", `todayschedule ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.parse(date) - 24 * 60 * 60 * 1000)}`)
                .text("▶️", `todayschedule ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.parse(date) + 24 * 60 * 60 * 1000)}`)
                .row()
                .text("Назад", "menu"),
        });
    });
}
exports.todayScheduleCommand = todayScheduleCommand;
//# sourceMappingURL=todayschedule.route.js.map