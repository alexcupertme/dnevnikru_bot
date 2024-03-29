"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessCheckMiddleware = void 0;
const api_1 = require("../../api");
function accessCheckMiddleware(accessToken) {
    return async function (ctx, next) {
        var _a, _b;
        const cmd = (_b = (_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        const context = new api_1.Context(accessToken);
        if (cmd != "/start" && cmd != "/auth") {
            const res = await context.me();
            if (res.response.statusCode == 401) {
                await ctx.reply("⚠️ Ваш аккаунт не авторизован! Авторизуйтесь через команду /auth");
            }
            else if (res.response.statusCode == 500) {
                await ctx.reply("😔 Нам очень жаль, но сервера Dnevnik.ru сейчас находятся на тех. обслуживании. Попробуйте выполнить команду через некоторое время (15 мин)");
            }
            else
                return await next();
        }
        else
            return await next();
    };
}
exports.accessCheckMiddleware = accessCheckMiddleware;
//# sourceMappingURL=accessCheckMiddleware.js.map