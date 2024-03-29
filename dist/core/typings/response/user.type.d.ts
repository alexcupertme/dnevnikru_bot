export declare type TUser = {
    id: number;
    id_str: string;
    personId: number;
    personId_str: string;
    name: string;
    email: string;
    login: string;
    fullName: string;
    fullNameInverse: string;
    firstName: string;
    middleName: string;
    lastName: string;
    shortName: string;
    locale: string;
    timezone: string;
    sex: string;
    photoSmall: string;
    photoMedium: string;
    photoLarge: string;
    birthday: string;
    roles: string[];
};
export declare type TContext = {
    userId: number;
    avatarUrl: string;
    roles: string[];
    children: {
        personId: number;
        firstName: string;
        lastName: string;
        middleName: string;
        shortName: string;
        schoolIds: number[];
        groupIds: number[];
    }[];
    schools: {
        id: number;
        name: string;
        type: string;
        groupIds: number[];
    }[];
    eduGroups: {
        id: number;
        id_str: string;
        parentIds: number[];
        parentIds_str: string[];
        type: string;
        name: string;
        fullName: string;
        parallel: number;
        timetable: number;
        timetable_str: string;
        status: string;
        studyyear: number;
        educationType: string;
        subjects: {
            id: number;
            id_str: string;
            name: string;
            knowledgeArea: string;
            fgosSubjectId: number;
        }[];
        journaltype: string;
    }[];
    splitId: string;
    personId: number;
    firstName: string;
    lastName: string;
    middleName: string;
    shortName: string;
    schoolIds: number[];
    groupIds: number[];
};
