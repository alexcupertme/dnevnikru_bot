"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutRoute = void 0;
const grammy_1 = require("grammy");
const bot_service_1 = require("../../core/services/bot.service");
function aboutRoute() {
    const bot = bot_service_1.BotService.getInstance();
    bot.callbackQuery("about", async (ctx) => {
        let stringBuilder = `Разработчик:
@vzlomed (Telegram)
vk.com/vzlomed (VK)
github.com/vzlomed (Github)

Made with 💖 by Alex `;
        ctx.editMessageText(stringBuilder, {
            reply_markup: new grammy_1.InlineKeyboard().text("Назад", "start"),
        });
    });
}
exports.aboutRoute = aboutRoute;
//# sourceMappingURL=about.route.js.map