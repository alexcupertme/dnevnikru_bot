import got, { Got } from "got";
import { constants } from "../constants";

export class Request {
	protected accessToken: string;
	protected session: Got;

	constructor(accessToken: string = "") {
		this.session = this.makeSession();
		this.accessToken = accessToken;
	}

	public makeSession(): Got {
		const session = got.extend({
			headers: {
				"Access-Token": constants.accessToken,
				"Accept-Encoding": "gzip, deflate, br",
				Connection: "keep-alive",
			},
			throwHttpErrors: false,
			parseJson: (text) => JSON.parse(text),
			hooks: {
				afterResponse: [
					// (response, retryWithMergedOptions) => {
					// 	if (response.statusCode === 401) {
					// 		response.body = "Unauthorized";
					// 		return response;
					// 	}
					// 	return response;
					// },
				],
			},
			allowGetBody: true,
		});

		return session;
	}
}
