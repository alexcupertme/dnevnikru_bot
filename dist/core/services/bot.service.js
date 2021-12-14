"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const grammy_1 = require("grammy");
const router_1 = require("@grammyjs/router");
const constants_1 = require("../../core/constants");
class BotService extends grammy_1.Bot {
    constructor() {
        super(constants_1.constants.telegramToken);
    }
    static getInstance() {
        if (!BotService.instance)
            BotService.instance = new grammy_1.Bot(constants_1.constants.telegramToken);
        return BotService.instance;
    }
    static getRouter() {
        if (!BotService.router)
            BotService.router = new router_1.Router((ctx) => ctx.session.route);
        return BotService.router;
    }
}
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map