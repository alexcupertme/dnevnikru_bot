"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToFormData = void 0;
function objectToFormData(object) {
    let formData = "";
    for (let elementName in object) {
        formData += `${elementName}=${object[elementName]}&`;
    }
    return formData;
}
exports.objectToFormData = objectToFormData;
//# sourceMappingURL=objectToFormData.js.map