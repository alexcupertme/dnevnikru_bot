"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedules = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Schedules extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async schedule(eduGroup, personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/groups/${eduGroup}/schedules`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Schedules = Schedules;
//# sourceMappingURL=schedules.js.map