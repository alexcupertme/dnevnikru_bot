"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schools = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Schools extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async parameters(schoolId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/schools/${schoolId}/parameters`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async schoolProfile(schoolId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/schools/${schoolId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async personSchools() {
        const req = await this.session.get(constants_1.constants.apiUrl + `/schools/person-schools`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async includedCities() {
        const req = await this.session.get(constants_1.constants.apiUrl + `/schools/cities`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async users(schoolId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/schools/${schoolId}/membership`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Schools = Schools;
//# sourceMappingURL=schools.js.map