"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classmatesCommand = void 0;
const constants_1 = require("../../core/constants");
const bot_service_1 = require("../../core/services/bot.service");
const api_1 = require("../../api");
const grammy_1 = require("grammy");
function classmatesCommand() {
    const bot = bot_service_1.BotService.getInstance();
    const context = new api_1.Context(constants_1.constants.accessToken);
    const eduGroups = new api_1.EduGroups(constants_1.constants.accessToken);
    const persons = new api_1.Persons(constants_1.constants.accessToken);
    bot.callbackQuery("classmates", async (ctx) => {
        await ctx.editMessageText("⌛ Ожидайте... выполняем поиск");
        const contextRes = await context.me();
        const eduGroupsRes = await eduGroups.groupsWithStudents([contextRes.body.eduGroups[0].id_str]);
        const personsRes = await persons.classmates(eduGroupsRes.body[0].group.id_str);
        let stringBuilder = `Список одноклассников в группе с ID ${eduGroupsRes.body[0].group.id_str}\n\n`;
        personsRes.body.map((person, index) => {
            stringBuilder += `${index + 1}. Имя:  <code>${person.shortName}</code>\n`;
            stringBuilder += `Айди персоны:  <code>${person.id_str}</code>\n`;
            stringBuilder += `Юзер айди:  <code>${person.userId_str}</code>\n\n`;
        });
        await ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard().text("Назад", "menu"),
            parse_mode: "HTML",
        });
    });
}
exports.classmatesCommand = classmatesCommand;
//# sourceMappingURL=classmates.route.js.map