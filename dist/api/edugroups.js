"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduGroups = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class EduGroups extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async group(eduGroup) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async currentPersonGroups(personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async allPersonGroups(personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/edu-groups/all`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async schoolPersonGroups(personId, schoolId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}/schools/${schoolId}/edu-groups`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async groupsWithStudents(groupIds) {
        const req = await this.session.post(constants_1.constants.apiUrl + `/edu-groups/students`, {
            json: groupIds,
        });
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.EduGroups = EduGroups;
//# sourceMappingURL=edugroups.js.map