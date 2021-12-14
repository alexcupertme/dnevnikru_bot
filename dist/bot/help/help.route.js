"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpRoute = void 0;
const grammy_1 = require("grammy");
const bot_service_1 = require("../../core/services/bot.service");
function helpRoute() {
    const bot = bot_service_1.BotService.getInstance();
    bot.callbackQuery("help", async (ctx) => {
        let stringBuilder = `FAQ:
1. Для чего необходим данный бот?
С помощью этого бота Вы можете просматривать данные аккаунта(ов) dnevnik.ru в реальном времени, узнавать оценки, расписание и многое другое
    
2. Это официальный бот и могут ли мой аккаунт заблокировать за использование бота?
Это НЕОФИЦИАЛЬНЫЙ бот, за Ваш аккаунт мы ответственности не несём. Все действия с аккаунтом выполняются только с Вашим согласием и в течение сессии токена
    
3. Что такое токен, сессия и как получить токен?
Токен - специальный ключ для использования сервиса dnevnik.ru. С помощью него осуществляется работа бота. Сессия - время которое он будет действовать (токен).
По истечении месяца использования нужно возобновить токен
Пропишите /auth и следуйте инструкции

4. Кто разработчик?
@vzlomed (Telegram)`;
        ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard().text("Назад", "start"),
        });
    });
}
exports.helpRoute = helpRoute;
//# sourceMappingURL=help.route.js.map