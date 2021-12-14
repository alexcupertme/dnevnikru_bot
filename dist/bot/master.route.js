"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterRoute = void 0;
const _1 = require(".");
const about_route_1 = require("./about/about.route");
class MasterRoute {
    constructor() {
        (0, _1.helpRoute)();
        (0, _1.todayHomeworkCommand)();
        (0, _1.todayScheduleCommand)();
        (0, _1.meCommand)();
        (0, _1.userCommand)();
        (0, _1.classmatesCommand)();
        (0, _1.startCommand)();
        (0, _1.averageMeFunction)();
        (0, _1.averageUserFunction)();
        (0, _1.menuRoute)();
        (0, about_route_1.aboutRoute)();
    }
}
exports.MasterRoute = MasterRoute;
//# sourceMappingURL=master.route.js.map