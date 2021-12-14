import { MyContext } from "../services/bot.service";
export declare function routingMiddleware(accessToken: string): (ctx: MyContext, next: any) => Promise<void>;
