export declare type TPeriod = {
    id: number;
    id_str: string;
    start: string;
    finish: string;
    number: number;
    type: string;
    name: string;
    year: number;
};
export declare type TPeriodGroup = {
    id: number;
    reportingPeriods: {
        id: number;
        id_str: string;
        start: string;
        finish: string;
        number: number;
        type: string;
        name: string;
        year: number;
    }[];
    holidays: {
        id: number;
        reportingPeriodGroupId: number;
        dateStart: string;
        dateFinish: string;
        name: string;
        description: string;
    }[];
};
