import * as mongoose from "mongoose";
import { IDBUser, IDBEduGroup, IDBSchool, IDBChildren } from "./user.interface";

const SchoolSchema = new mongoose.Schema<IDBSchool>({
	id: String,
	name: String,
	type: String,
	groupIds: Array,
});

const EduGroupsSchema = new mongoose.Schema<IDBEduGroup>({
	id: String,
	parentIds: Array,
	type: String,
	name: String,
	parallel: String,
	timetable: String,
	status: String,
	studyyear: String,
	journaltype: String,
});

const ChildrenSchema = new mongoose.Schema<IDBChildren>({
	personId: String,
	firstName: String,
	lastName: String,
	middleName: String,
	shortName: String,
	schoolIds: [Number],
	groupIds: [Number],
});

const UserSchema = new mongoose.Schema<IDBUser>({
	accessToken: {
		type: String,
		required: true,
	},
	userId: { type: String, required: true },
	personId: { type: String, required: true },
	name: {
		shortName: { type: String, required: true },
	},
	login: {
		type: String,
		required: true,
	},
	locale: {
		type: String,
		required: true,
	},
	timezone: {
		type: String,
		required: true,
	},
	birthday: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	roles: [
		{
			type: String,
		},
	],
	children: [
		{
			type: String,
		},
	],
	lastUpdate: {
		type: Number,
		required: true,
		default: () => Date.now(),
	},
	schools: [{ type: SchoolSchema, required: true }],
	eduGroups: [{ type: EduGroupsSchema, required: true }],
	registerDate: {
		type: Number,
		required: true,
		default: () => Date.now(),
	},
});

export const userModel = mongoose.model<IDBUser & mongoose.Document<IDBUser, IDBUser, IDBUser>>("User", UserSchema);
