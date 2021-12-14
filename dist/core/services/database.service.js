"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../constants");
class DatabaseService {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose_1.default.connect(`mongodb://${constants_1.constants.mongodb.host}:27017/${constants_1.constants.mongodb.db_name}`).catch((error) => console.log(error));
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map