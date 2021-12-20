"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
exports.constants = {
    apiUrl: "https://api.dnevnik.ru/v2.0",
    baseUrl: "https://dnevnik.ru/",
    loginUrl: "https://login.dnevnik.ru/login/",
    accessToken: "***REMOVED***",
    personId: ***REMOVED***,
    eduGroup: ***REMOVED***,
    telegramToken: process.env.TELEGRAM_TOKEN,
    redis: {
        host: process.env.REDIS_LEGACY_HOST,
        port: process.env.REDIS_LEGACY_PORT,
        password: process.env.REDIS_LEGACY_PWD,
    },
    redisLocal: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PWD,
    },
    mongodb: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PWD,
        host: process.env.MONGO_HOST,
        db_name: "dnevnikru",
    },
};
//# sourceMappingURL=constants.js.map