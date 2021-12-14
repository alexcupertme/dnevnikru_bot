"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixTimestampConverter = void 0;
function unixTimestampConverter(time) {
    let a = new Date(time);
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let timeStr = `${date}-${month}-${year}`;
    return timeStr;
}
exports.unixTimestampConverter = unixTimestampConverter;
//# sourceMappingURL=unixTimestampConverter.js.map