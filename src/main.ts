import "./config";
import { BotService } from "./core/services/bot.service";
import { constants } from "./core/constants";
import { GrammyError, HttpError, session } from "grammy";
import { run } from "@grammyjs/runner";
import { accessCheckMiddleware } from "./core/middlewares/accessCheckMiddleware";
import { routingMiddleware } from "./core/middlewares/routingMiddleware";
import { RedisService } from "./core/services/redis.service";
import { MasterRoute } from "./bot/master.route";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGO_USER: string;
			MONGO_PWD: string;
			MONGO_HOST: string;

			REDIS_PWD: string;
			REDIS_HOST: string;
			REDIS_PORT: string;

			REDIS_LEGACY_PWD: string;
			REDIS_LEGACY_HOST: string;
			REDIS_LEGACY_PORT: string;

			TELEGRAM_TOKEN: string;
		}
	}
}

console.log("Running!");

const bot = BotService.getInstance();

bot.use(
	session({
		initial: () => ({
			route: "/",
			date: 0,
			chatId: 0,
			customData: {},
		}),
		storage: RedisService.getInstance().storage,
	})
);
bot.use(BotService.getRouter());
bot.use(accessCheckMiddleware(constants.accessToken));
bot.catch((err) => {
	const ctx = err.ctx;
	console.error(`Error while handling update ${ctx.update.update_id}:`);
	const e = err.error;
	if (e instanceof GrammyError) {
		console.error("Error in request:", e.description);
	} else if (e instanceof HttpError) {
		console.error("Could not contact Telegram:", e);
	} else {
		console.error("Unknown error:", e);
	}
});
bot.use(routingMiddleware(constants.accessToken));
new MasterRoute();

const runner = run(bot);

// Stopping the bot when Node process
// is about to be terminated
const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
