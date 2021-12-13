import { InlineKeyboard } from "grammy";
import { BotService } from "../../core/services/bot.service";

export function aboutRoute() {
	const bot = BotService.getInstance();
	bot.callbackQuery("about", async (ctx) => {
		//prettier-ignore
		let stringBuilder = 
        `Разработчик:
@vzlomed (Telegram)
vk.com/vzlomed (VK)
github.com/vzlomed (Github)

Made with 💖 by Alex `;
		ctx.editMessageText(stringBuilder, {
			reply_markup: new InlineKeyboard().text("Назад", "start"),
		});
	});
}
