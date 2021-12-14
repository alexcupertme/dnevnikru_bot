import { TUserFeed } from "../core/typings/response/feed.type";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class UserFeeds extends Request {
    constructor(accessToken: string);
    me(date: string, dateLimit?: string, childPersonId?: string | number): Promise<{
        response: Response<any>;
        body: TUserFeed;
    }>;
}
