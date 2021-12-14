"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingPeriods = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class ReportingPeriods extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async periods(eduGroup) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/reporting-periods`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async periodsAndHolidays(eduGroup, personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/reporting-period-group`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.ReportingPeriods = ReportingPeriods;
//# sourceMappingURL=reporting_periods.js.map