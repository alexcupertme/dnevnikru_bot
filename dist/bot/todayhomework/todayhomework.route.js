"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todayHomeworkCommand = void 0;
const constants_1 = require("../../core/constants");
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const unixTimestampConverter_1 = require("../../core/utils/unixTimestampConverter");
const grammy_1 = require("grammy");
function todayHomeworkCommand() {
    const bot = bot_service_1.BotService.getInstance();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const eduGroups = new api_1.EduGroups(constants_1.constants.accessToken);
    const persons = new api_1.Persons(constants_1.constants.accessToken);
    const homeworks = new api_1.Homeworks(constants_1.constants.accessToken);
    const users = new api_1.Users(constants_1.constants.accessToken);
    bot.callbackQuery(/todayhomework ((([1-9])|([1-3][0-9]))-((?:JAN)|(?:FEB)|(?:MAR)|(?:APR)|(?:MAY)|(?:JUN)|(?:JUL)|(?:AUG)|(?:SEP)|(?:OCT)|(?:NOV)|(?:DEC))-[2][0][1-2][0-9]$)/, async (ctx) => {
        const date = ctx.match[1] ? ctx.match[1] : (0, unixTimestampConverter_1.unixTimestampConverter)(Date.now());
        const contextRes = await context.me();
        const homeworksRes = await homeworks.me(contextRes.body.schoolIds[0], date, date);
        let stringBuilder = `Домашнее задание за ${date}\n\n`;
        for (let [index, homework] of homeworksRes.body.works.entries()) {
            const lesson = homeworksRes.body.lessons.find((lesson) => {
                return lesson.subjectId == homework.subjectId;
            });
            const subject = homeworksRes.body.subjects.find((subject) => {
                return subject.id == homework.subjectId;
            });
            const userRes = await users.user(homework.createdBy);
            stringBuilder += `${index + 1}. ${subject.name}\n`;
            stringBuilder += `Тема: ${lesson.title ? lesson.title : "Пусто"}\n`;
            stringBuilder += `Задание: ${homework.text}\n`;
            stringBuilder += `Учитель: ${userRes.body.shortName}\n`;
            stringBuilder += `Кабинет: ${subject.knowledgeAreaId}\n`;
            stringBuilder += `${homework.oneDriveLinks.length ? `Файлы: ${homework.oneDriveLinks.join(" , ")}\n\n` : "\n"}`;
        }
        await ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard()
                .text("◀️", `todayhomework ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.parse(date) - 24 * 60 * 60 * 1000)}`)
                .text("▶️", `todayhomework ${(0, unixTimestampConverter_1.unixTimestampConverter)(Date.parse(date) + 24 * 60 * 60 * 1000)}`)
                .row()
                .text("Назад", "menu"),
        });
    });
}
exports.todayHomeworkCommand = todayHomeworkCommand;
//# sourceMappingURL=todayhomework.route.js.map