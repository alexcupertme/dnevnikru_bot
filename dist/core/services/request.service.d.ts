import { Got } from "got";
export declare class Request {
    protected accessToken: string;
    protected session: Got;
    constructor(accessToken?: string);
    makeSession(): Got;
}
