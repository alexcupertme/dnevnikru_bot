"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homeworks = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Homeworks extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async me(schoolId, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/users/me/school/${schoolId}/homeworks?startDate=${from}&endDate=${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Homeworks = Homeworks;
//# sourceMappingURL=homeworks.js.map