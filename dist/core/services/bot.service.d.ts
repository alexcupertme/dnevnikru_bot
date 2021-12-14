import { Context, SessionFlavor, Bot as GrammYBot } from "grammy";
import { Router } from "@grammyjs/router";
export interface MyUserData {
    route: string;
    date: number;
    chatId: number;
    customData: any;
}
export interface MyContext extends Context, SessionFlavor<MyUserData> {
}
export declare class BotService<T> extends GrammYBot {
    private static instance;
    private static router;
    private constructor();
    static getInstance(): GrammYBot<MyContext>;
    static getRouter(): Router<MyContext>;
}
