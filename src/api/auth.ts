import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";

export class Auth extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	private async saveToken() {}
}
