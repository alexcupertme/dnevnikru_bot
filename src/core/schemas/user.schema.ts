// import * as mongoose from "mongoose";
// import { IUser } from "./user.interface";

// const UserSchema = new mongoose.Schema<IUser, IUser, IUser>({
// 	id: { type: Number, required: true },
// 	name: {
// 		first: { type: String, required: true },
// 		second: { type: String, required: true },
// 	},
// 	registerDate: {
// 		type: Number,
// 		required: true,
// 		default: () => Date.now(),
// 	},
// });

// export const userModel = mongoose.model<IUser & mongoose.Document<IUser, IUser, IUser>>("User", UserSchema);
