import { MyContext } from "../services/bot.service";
import { Context } from "../../api";

export function accessCheckMiddleware(accessToken: string) {
	return async function (ctx: MyContext, next: any) {
		const cmd = ctx.update.message?.text?.toLowerCase();
		const context = new Context(accessToken);
		if (cmd != "/start" && cmd != "/auth") {
			const res = await context.me();
			if (res.response.statusCode == 401) {
				await ctx.reply("⚠️ Ваш аккаунт не авторизован! Авторизуйтесь через команду /auth");
			} else if (res.response.statusCode == 500) {
				await ctx.reply("😔 Нам очень жаль, но сервера Dnevnik.ru сейчас находятся на тех. обслуживании. Попробуйте выполнить команду через некоторое время (15 мин)");
			} else return await next();
		} else return await next();
	};
}
