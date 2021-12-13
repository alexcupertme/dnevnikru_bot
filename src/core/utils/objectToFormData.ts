export function objectToFormData(object: Record<string, any>): string {
	let formData = "";
	for (let elementName in object) {
		formData += `${elementName}=${object[elementName]}&`;
	}
	return formData;
}
