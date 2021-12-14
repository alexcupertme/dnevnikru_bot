"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Users extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async me() {
        const req = await this.session.get(constants_1.constants.apiUrl + "/users/me");
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async user(userId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/users/${userId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async meRoles() {
        const req = await this.session.get(constants_1.constants.apiUrl + "/users/me/roles");
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async usersMany(userIds) {
        const req = await this.session.post(constants_1.constants.apiUrl + "/users/many", {
            json: userIds,
        });
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async userRoles(userId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/users/${userId}/roles`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Users = Users;
//# sourceMappingURL=users.js.map