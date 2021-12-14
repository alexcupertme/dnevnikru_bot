"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingMiddleware = void 0;
function routingMiddleware(accessToken) {
    return async function (ctx, next) {
        const cmd = ctx.update.message.text.toLowerCase();
        const chatId = ctx.chat.id;
        ctx.session = {
            route: cmd,
            chatId: chatId,
            customData: ctx.session.customData,
            date: Date.now(),
        };
        await next();
    };
}
exports.routingMiddleware = routingMiddleware;
//# sourceMappingURL=routingMiddleware.js.map