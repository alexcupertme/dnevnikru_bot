"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const request_service_1 = require("../core/services/request.service");
class Auth extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async saveToken() { }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map