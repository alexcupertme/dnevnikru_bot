import { TContext } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Context extends Request {
    constructor(accessToken: string);
    me(): Promise<{
        response: Response<any>;
        body: TContext;
    }>;
    user(userId: string | number): Promise<{
        response: Response<any>;
        body: TContext;
    }>;
}
