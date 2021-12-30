import md5 from "md5";

export function createHashSum(str: string) {
	return md5(str).slice(-16);
}
