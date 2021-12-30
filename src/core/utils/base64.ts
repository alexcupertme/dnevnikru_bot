export function toBase64(str: string) {
	return Buffer.from(str).toString("base64");
}

export function fromBase64(str: string) {
	return Buffer.from(str, "base64").toString(`utf-8`);
}
