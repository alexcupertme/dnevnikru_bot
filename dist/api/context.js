"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Context extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async me() {
        const req = await this.session.get(constants_1.constants.apiUrl + `/users/me/context`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async user(userId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/users/${userId}/context`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map