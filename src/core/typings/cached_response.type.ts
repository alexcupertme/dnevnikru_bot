import { NormalizedOptions, Response } from "got";
import { IncomingHttpHeaders } from "http";

export type TCachedResponse = {
	body: string;
	complete: boolean;
	aborted: boolean;
	destroyed: boolean;
	headers: IncomingHttpHeaders;
	isFromCache: boolean;
	method?: string;
	redirectUrls: string[];
	requestUrl: string;
	retryCount: number;
	statusCode: number;
	statusMessage?: string;
	url: string;
	request: {
		aborted: boolean;
		destroyed: boolean;
		isFromCache: boolean;
		redirects: string[];
		requestInitialized: boolean;
		requestUrl: string;
		retryCount: number;
		options: NormalizedOptions;
	};
};
