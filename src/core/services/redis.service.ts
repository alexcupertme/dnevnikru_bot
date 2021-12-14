import { constants } from "../constants";
import Redis from "ioredis";
import fs from "fs";
import path from "path";
import { RedisAdapter } from "@satont/grammy-redis-storage";
import { MyContext, MyUserData } from "./bot.service";

export class RedisService {
	readonly client: Redis.Redis;
	readonly storage: RedisAdapter<MyUserData>;
	private static instance: RedisService;

	private constructor() {
		this.client = new Redis(`rediss://:${constants.redisLocal.password}@${constants.redisLocal.host}:${constants.redisLocal.port}`, {
			// tls: {
			// 	ca: fs.readFileSync(path.resolve(__dirname, "ca.pem")),
			// },
		});
		this.storage = new RedisAdapter<MyUserData>({ instance: this.client });
	}

	public static getInstance(): RedisService {
		if (!RedisService.instance) RedisService.instance = new RedisService();
		return RedisService.instance;
	}

	async setCache(key: any, value: any, expire: number = null) {
		let res;
		expire == null ? (res = await this.client.set(key, value)) : (res = await this.client.set(key, value, "EX", expire));
		return res;
	}

	async getCache(key: any) {
		return await this.client.get(key);
	}

	async delCache(key: any) {
		return await this.client.del(key);
	}
}
