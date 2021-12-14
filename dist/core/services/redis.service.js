"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const constants_1 = require("../constants");
const ioredis_1 = __importDefault(require("ioredis"));
const grammy_redis_storage_1 = require("@satont/grammy-redis-storage");
class RedisService {
    constructor() {
        this.client = new ioredis_1.default(`rediss://:${constants_1.constants.redisLocal.password}@${constants_1.constants.redisLocal.host}:${constants_1.constants.redisLocal.port}`, {});
        this.storage = new grammy_redis_storage_1.RedisAdapter({ instance: this.client });
    }
    static getInstance() {
        if (!RedisService.instance)
            RedisService.instance = new RedisService();
        return RedisService.instance;
    }
    async setCache(key, value, expire = null) {
        let res;
        expire == null ? (res = await this.client.set(key, value)) : (res = await this.client.set(key, value, "EX", expire));
        return res;
    }
    async getCache(key) {
        return await this.client.get(key);
    }
    async delCache(key) {
        return await this.client.del(key);
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map