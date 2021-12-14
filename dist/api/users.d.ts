import { TUser } from "../core/typings/response/user.type";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Users extends Request {
    constructor(accessToken: string);
    me(): Promise<{
        response: Response<any>;
        body: TUser;
    }>;
    user(userId: string | number): Promise<{
        response: Response<any>;
        body: TUser;
    }>;
    meRoles(): Promise<{
        response: Response<any>;
        body: string[];
    }>;
    usersMany(userIds: Array<string | number>): Promise<{
        response: Response<any>;
        body: TUser[];
    }>;
    userRoles(userId: string | number): Promise<{
        response: Response<any>;
        body: string[];
    }>;
}
