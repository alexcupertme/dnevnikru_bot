"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_service_1 = require("./core/services/bot.service");
const constants_1 = require("./core/constants");
const grammy_1 = require("grammy");
const runner_1 = require("@grammyjs/runner");
const accessCheckMiddleware_1 = require("./core/middlewares/accessCheckMiddleware");
const redis_service_1 = require("./core/services/redis.service");
const master_route_1 = require("./bot/master.route");
console.log("Running!");
const bot = bot_service_1.BotService.getInstance();
bot.use((0, grammy_1.session)({
    initial: () => ({
        route: "/",
        date: 0,
        chatId: 0,
        customData: {},
    }),
    storage: redis_service_1.RedisService.getInstance().storage,
}));
bot.use(bot_service_1.BotService.getRouter());
bot.use((0, accessCheckMiddleware_1.accessCheckMiddleware)(constants_1.constants.accessToken));
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof grammy_1.GrammyError) {
        console.error("Error in request:", e.description);
    }
    else if (e instanceof grammy_1.HttpError) {
        console.error("Could not contact Telegram:", e);
    }
    else {
        console.error("Unknown error:", e);
    }
});
new master_route_1.MasterRoute();
const runner = (0, runner_1.run)(bot);
const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
//# sourceMappingURL=main.js.map