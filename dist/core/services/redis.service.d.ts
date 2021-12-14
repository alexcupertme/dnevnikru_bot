import Redis from "ioredis";
import { RedisAdapter } from "@satont/grammy-redis-storage";
import { MyUserData } from "./bot.service";
export declare class RedisService {
    readonly client: Redis.Redis;
    readonly storage: RedisAdapter<MyUserData>;
    private static instance;
    private constructor();
    static getInstance(): RedisService;
    setCache(key: any, value: any, expire?: number): Promise<"OK">;
    getCache(key: any): Promise<string>;
    delCache(key: any): Promise<number>;
}
