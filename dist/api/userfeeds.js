"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeeds = void 0;
const constants_1 = require("../core/constants");
const request_service_1 = require("../core/services/request.service");
class UserFeeds extends request_service_1.Request {
    constructor(accessToken) {
        super(accessToken);
    }
    async me(date, dateLimit, childPersonId) {
        const req = await this.session.get(constants_1.constants.apiUrl + "/users/me/feed", {
            searchParams: {
                date,
                childPersonId,
                dateLimit,
            },
        });
        return {
            response: req,
            body: JSON.parse(req.body),
        };
    }
}
exports.UserFeeds = UserFeeds;
//# sourceMappingURL=userfeeds.js.map