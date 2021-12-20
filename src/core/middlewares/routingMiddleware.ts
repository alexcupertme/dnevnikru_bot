import { MyContext } from "../services/bot.service";

export function routingMiddleware(accessToken: string) {
	return async function (ctx: MyContext, next: any) {
		// const cmd = ctx.update.message.text.toLowerCase();
		// const chatId = ctx.chat.id;
		ctx.session = {
			...ctx.session,
			date: Date.now(),
		};
		await next();
	};
}
