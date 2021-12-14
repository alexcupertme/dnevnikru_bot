import { Context } from "telegraf";
export interface SessionData {
    data: Record<any, any>;
}
export interface MyContext extends Context {
    session?: SessionData;
}
