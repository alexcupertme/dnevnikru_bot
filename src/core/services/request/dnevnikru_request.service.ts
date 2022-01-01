import { createHashSum } from "../../utils/createHashSum";
import { RedisService } from "../redis/redis.service";
import { Request } from "./request.service";
import stringify from "json-stringify-safe";
import { fromBase64, toBase64 } from "../../utils/base64";
import { TCachedResponse } from "../../typings/cached_response.type";
import { OptionsOfTextResponseBody, Response } from "got/dist/source";

export class DnevnikRuRequest extends Request {
	protected accessToken: string;
	protected redis: RedisService;
	constructor(accessToken: string = "") {
		super();
		this.redis = RedisService.getInstance();
		this.accessToken = accessToken;
		this.session = this.session.extend({
			headers: { "Access-Token": this.accessToken },
		});
	}
	private async _beforeHook(options: OptionsOfTextResponseBody): Promise<TCachedResponse | null> {
		if (await this.redis.existsCache(`cacheable-request:${options.method}:${createHashSum(this.accessToken)}:${options.url}`)) {
			const cachedResponse = await this.redis.getCache(`cacheable-request:${options.method}:${createHashSum(this.accessToken)}:${options.url}`);
			const response: TCachedResponse = JSON.parse(cachedResponse);
			response.body = JSON.parse(fromBase64(response.body));
			return response;
		}
		return null;
	}

	private async _afterHook(response: Response<any>, options: OptionsOfTextResponseBody): Promise<void> {
		const responseForCaching: TCachedResponse = {
			body: toBase64(stringify(response.body)),
			complete: response.complete,
			aborted: response.aborted,
			destroyed: response.destroyed,
			headers: response.headers,
			isFromCache: true,
			method: response.method,
			redirectUrls: response.redirectUrls,
			requestUrl: response.requestUrl,
			retryCount: response.retryCount,
			statusCode: response.statusCode,
			statusMessage: response.statusMessage,
			url: response.url,
			request: {
				aborted: response.request.aborted,
				destroyed: response.request.destroyed,
				isFromCache: true,
				redirects: response.request.redirects,
				requestInitialized: response.request.requestInitialized,
				requestUrl: response.request.requestUrl,
				retryCount: response.request.retryCount,
				options: response.request.options,
			},
		};
		const counterReq = `cacheable-request:COUNTER:${this.accessToken}`;
		const counter = await this.redis.getCache(counterReq);
		if (counter && parseInt(counter) < 50) {
			await this.redis.incrCache(counterReq);
			await this.redis.setCache(`cacheable-request:${options.method}:${createHashSum(this.accessToken)}:${response.url}`, stringify(responseForCaching), 600);
		} else if (!counter) {
			await this.redis.setCache(counterReq, 1, 1500);
			await this.redis.setCache(`cacheable-request:${options.method}:${createHashSum(this.accessToken)}:${response.url}`, stringify(responseForCaching), 600);
		} else if (parseInt(counter) > 50) {
			return;
		}
	}
	async sendCached(options?: OptionsOfTextResponseBody): Promise<TCachedResponse | Response<any>> {
		const cachedRes = await this._beforeHook(options);
		if (cachedRes) return cachedRes;
		const res = await this.session(options);
		await this._afterHook(res, options);
		return res;
	}
}
