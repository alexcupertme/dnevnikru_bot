import { Request } from "../core/services/request.service";
export declare class Auth extends Request {
    constructor(accessToken: string);
    private saveToken;
}
