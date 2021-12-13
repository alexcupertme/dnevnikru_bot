import { Request } from "../core/services/request.service";

export class Auth extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	private async saveToken() {}
}
