import got, { Got } from "got";

export class Request {
	protected session: Got;

	constructor() {
		this.session = this.makeSession();
	}

	public makeSession(): Got {
		const session = got.extend({
			headers: {
				"Accept-Encoding": "gzip, deflate, br",
				"User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
				Connection: "keep-alive",
			},
			throwHttpErrors: false,
			parseJson: (text) => JSON.parse(text),
			allowGetBody: true,
		});

		return session;
	}
}
