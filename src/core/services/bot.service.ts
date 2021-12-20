import { Context, SessionFlavor, Bot as GrammYBot, Bot } from "grammy";
import { Router } from "@grammyjs/router";
import { constants } from "../../core/constants";

export interface MyUserData {
	route: string;
	date: number;
	chatId: number;
	customData: any;
}

export interface MyContext extends Context, SessionFlavor<MyUserData> {}

export class BotService<T> extends GrammYBot {
	private static instance: GrammYBot<MyContext>;
	private static router: Router<MyContext>;
	private constructor() {
		super(constants.telegramToken);
	}

	public static getInstance(): GrammYBot<MyContext> {
		if (!BotService.instance) BotService.instance = new GrammYBot<MyContext>(constants.telegramToken);
		return BotService.instance;
	}
	public static getRouter(): Router<MyContext> {
		if (!BotService.router) BotService.router = new Router<MyContext>((ctx) => ctx.session.route);
		return BotService.router;
	}
}
