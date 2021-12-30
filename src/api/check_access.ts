import { TContext } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { TCachedResponse } from "@core/typings/cached_response.type";

export class CheckAccess extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async default(): Promise<{ response: TCachedResponse; body: TContext }> {
		const req = await this.session({
			method: "GET",
			url: constants.apiUrl + `/users/me/context`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
