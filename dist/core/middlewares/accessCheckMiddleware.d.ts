import { MyContext } from "../services/bot.service";
export declare function accessCheckMiddleware(accessToken: string): (ctx: MyContext, next: any) => Promise<any>;
