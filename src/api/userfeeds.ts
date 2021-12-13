import { TUserFeed } from "../core/typings/response/feed.type";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class UserFeeds extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(date: string, dateLimit?: string, childPersonId?: string | number): Promise<{ response: Response<any>; body: TUserFeed }> {
		const req = await this.session.get(constants.apiUrl + "/users/me/feed", {
			searchParams: {
				date,
				childPersonId,
				dateLimit,
			},
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
