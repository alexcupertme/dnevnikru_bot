"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThematicMarks = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class ThematicMarks extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async mark(markId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/thematic-marks/${markId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async personMarksSubject(personId, eduGroup, subjectId, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async personMarksPeriod(personId, eduGroup, subjectId, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.ThematicMarks = ThematicMarks;
//# sourceMappingURL=thematic_marks.js.map