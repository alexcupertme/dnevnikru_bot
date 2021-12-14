"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const got_1 = __importDefault(require("got"));
const constants_1 = require("../constants");
class Request {
    constructor(accessToken = "") {
        this.session = this.makeSession();
        this.accessToken = accessToken;
    }
    makeSession() {
        const session = got_1.default.extend({
            headers: {
                "Access-Token": constants_1.constants.accessToken,
                "Accept-Encoding": "gzip, deflate, br",
                Connection: "keep-alive",
            },
            throwHttpErrors: false,
            parseJson: (text) => JSON.parse(text),
            hooks: {
                afterResponse: [],
            },
            allowGetBody: true,
        });
        return session;
    }
}
exports.Request = Request;
//# sourceMappingURL=request.service.js.map