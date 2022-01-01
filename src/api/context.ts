import { TContext } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "@core/typings/cached_response.type";

export class Context extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(): Promise<{ response: TCachedResponse; body: TContext }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/users/me/context`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async user(userId: string | number): Promise<{ response: TCachedResponse; body: TContext }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/users/${userId}/context`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
