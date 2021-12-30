import { MyContext } from "../services/bot.service";
import { CheckAccess } from "../../api";
import { InlineKeyboard } from "grammy";

export function accessCheckMiddleware(accessToken: string) {
	return async function (ctx: MyContext, next: any) {
		const cmd = ctx.update.message?.text?.toLowerCase();
		const callbackMsg = ctx.update.callback_query?.data?.toLowerCase();
		const context = new CheckAccess(accessToken);
		if (cmd != "/start" && cmd != "/auth" && callbackMsg != "help" && callbackMsg != "menu" && callbackMsg != "about" && callbackMsg != "start" && callbackMsg != "auth") {
			const res = await context.default();
			if (res.response.statusCode == 401) {
				await ctx.editMessageText("⚠️ Ваш аккаунт не авторизован! Авторизуйтесь через команду /auth", {
					reply_markup: new InlineKeyboard().text("Назад", "start").text("Авторизоваться", "auth").row(),
				});
			} else if (res.response.statusCode == 500) {
				await ctx.editMessageText("😔 Нам очень жаль, но сервера Dnevnik.ru сейчас находятся на тех. обслуживании. Попробуйте выполнить команду через некоторое время (15 мин)", {
					reply_markup: new InlineKeyboard().text("Назад", "start"),
				});
			} else return await next();
		} else return await next();
	};
}
