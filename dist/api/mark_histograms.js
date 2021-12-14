"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkHistograms = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class MarkHistograms extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async workHistogram(workId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/works/${workId}/marks/histogram`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async periodHistogram(eduGroup, periodId, subjectId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/periods/${periodId}/subjects/${subjectId}/groups/${eduGroup}/marks/histogram`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.MarkHistograms = MarkHistograms;
//# sourceMappingURL=mark_histograms.js.map