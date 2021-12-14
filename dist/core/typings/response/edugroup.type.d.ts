export declare type TEduGroup = {
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
};
export declare type TEduGroupWithStudents = {
    group: {
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
    };
    students: {
        person: {
            id: number;
            id_str: string;
            userId: number;
            userId_str: string;
            firstName: string;
            lastName: string;
            middleName: string;
            shortName: string;
            sex: string;
        };
        membershipstatus: string;
    }[];
};
