import * as mongoose from "mongoose";
import { IUser } from "./user.interface";
export declare const userModel: mongoose.Model<IUser & mongoose.Document<IUser, IUser, IUser>, {}, {}, {}>;
