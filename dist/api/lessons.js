"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lessons = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class Lessons extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async lesson(lessonId) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/lessons/${lessonId}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
    async groupLessons(eduGroup, from, to) {
        const req = await this.session.get(constants_1.constants.apiUrl + `/edu-groups/${eduGroup}/lessons/${from}/${to}`);
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.Lessons = Lessons;
//# sourceMappingURL=lessons.js.map