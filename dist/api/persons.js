"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persons = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Persons extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async classmates(eduGroup) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/students`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async profile(personId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/persons/${personId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Persons = Persons;
//# sourceMappingURL=persons.js.map