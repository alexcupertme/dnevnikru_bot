export interface IDBEduGroup {
	id: number;
	parentIds: number[];
	type: string;
	name: string;
	parallel: number;
	timetable: number;
	status: string;
	studyyear: number;
	journaltype: string;
}

export interface IDBSchool {
	id: number;
	name: string;
	type: string;
	groupIds: number[];
}

export interface IDBChildren {
	personId: number;
	firstName: string;
	lastName: string;
	middleName: string;
	shortName: string;
	schoolIds: number[];
	groupIds: number[];
}

export interface IDBUser {
	accessToken: string;
	userId: string;
	personId: string;
	name: {
		shortName: string;
	};
	login: string;
	locale: string;
	timezone: string;
	birthday: string;
	email?: string;
	roles?: string[];
	children?: IDBChildren[];
	lastUpdate: number;
	schools: IDBSchool[];
	eduGroups: IDBEduGroup[];
	registerDate: number;
}
