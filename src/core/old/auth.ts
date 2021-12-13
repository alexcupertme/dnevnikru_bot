// import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";
// import randomUserAgent from "random-useragent";
// import got, { Got } from "got";
// import { CookieJar } from "tough-cookie";
// import FormData from "form-data";

// class Auth {
// 	private _password: string;
// 	private _login: string;

// 	get password(): string {
// 		return this._password;
// 	}
// 	get login(): string {
// 		return this._login;
// 	}

// 	constructor(login: string, password: string) {
// 		this._login = login;
// 		this._password = password;
// 	}

// 	private _onError(error: any) {
// 		const res: AxiosResponse = error.response;
// 		console.log(res.headers);
// 		if (res && res.status != 200 && res.status != 302 && res.config.url.match("dnevnik.ru")) {
// 			throw new Error("Dnevnik.ru servers are down, please retry later!");
// 		} else if (res.status == 302) return error.response;
// 		else throw new Error(error);
// 	}

// 	private async _makeSession(): Promise<Got> {
// 		let cookieJar = new CookieJar();
// 		const session = got.extend({
// 			cookieJar,
// 			headers: {
// 				"User-Agent": randomUserAgent.getRandom(),
// 				"Accept-Encoding": "gzip, deflate, br",
// 				Connection: "keep-alive",
// 			},
// 			handlers: [
// 				// (options, next) => {
// 				// 	// if (options.isStream) {
// 				// 	// 	return next(options);
// 				// 	// }
// 				// 	// return (async () => {
// 				// 	// 	try {
// 				// 	// 		const response = await next(options);
// 				// 	// 		return response;
// 				// 	// 	} catch (error) {
// 				// 	// 		console.log(error);
// 				// 	// 		throw new Error("Your very own error.");
// 				// 	// 	}
// 				// 	// })();
// 				// },
// 			],
// 		});

// 		return session;
// 	}

// 	private async _objectToFormData(object: Record<string, any>): Promise<string> {
// 		let formData = "";
// 		for (let elementName in object) {
// 			formData += `${elementName}=${object[elementName]}&`;
// 		}
// 		return formData;
// 	}

// 	public async auth(): Promise<Got> {
// 		const session = await this._makeSession();

// 		const formData = await this._objectToFormData({
// 			login: this.login,
// 			password: this.password,
// 		});

// 		const res = await session({
// 			url: "https://login.dnevnik.ru/login/esia/pskov",
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 			},
// 			followRedirect: false,
// 			body: formData,
// 		});

// 		if (res.body.match("Object moved")) return session;
// 		else throw new Error("Bad auth: incorrect login or password!");
// 	}
// }

// export = Auth;
