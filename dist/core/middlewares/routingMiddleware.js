"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingMiddleware = void 0;
function routingMiddleware(accessToken) {
    return async function (ctx, next) {
        ctx.session = Object.assign(Object.assign({}, ctx.session), { date: Date.now() });
        await next();
    };
}
exports.routingMiddleware = routingMiddleware;
//# sourceMappingURL=routingMiddleware.js.map