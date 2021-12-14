import { TIncludedCity, TPersonSchool, TSchool, TSchoolParameters, TSchoolUser } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Schools extends Request {
    constructor(accessToken: string);
    parameters(schoolId: string | number): Promise<{
        response: Response<any>;
        body: TSchoolParameters;
    }>;
    schoolProfile(schoolId: string | number): Promise<{
        response: Response<any>;
        body: TSchool;
    }>;
    personSchools(): Promise<{
        response: Response<any>;
        body: TPersonSchool[];
    }>;
    includedCities(): Promise<{
        response: Response<any>;
        body: TIncludedCity[];
    }>;
    users(schoolId: string | number): Promise<{
        response: Response<any>;
        body: TSchoolUser[];
    }>;
}
