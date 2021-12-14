"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marks = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Marks extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async mark(markId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/marks/${markId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async recent(personId, eduGroup, from, subjectId, limit) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/group/${eduGroup}/recentmarks?fromDate=${from}&subject=${subjectId}&limit=${limit}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async wAvgMarks(eduGroup, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/wa-marks/${from}/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async finalMarksGroup(eduGroup) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/final-marks`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async finalMarksPerson(eduGroup, personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/final-marks`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async fullFinalMarksPerson(eduGroup, personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/allfinalmarks`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async avgMark(periodId, personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/reporting-periods/${periodId}/avg-mark`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async avgMarkSubject(periodId, personId, subjectId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/reporting-periods/${periodId}/subjects/${subjectId}/avg-mark`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async avgMarksGroup(eduGroup, periodId, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/reporting-periods/${periodId}/avg-marks/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async avgMarksPeriod(eduGroup, periodId, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/avg-marks/${from}/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Marks = Marks;
//# sourceMappingURL=marks.js.map