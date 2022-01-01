import { TUserFeed } from "../core/typings/response/feed.type";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class UserFeeds extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(date: string, dateLimit?: string, childPersonId?: string | number): Promise<{ response: TCachedResponse; body: TUserFeed }> {
		const req = await this.sendCached({
			searchParams: {
				date,
				childPersonId,
				dateLimit,
			},
			method: "GET",
			url: constants.apiUrl + "/users/me/feed",
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
