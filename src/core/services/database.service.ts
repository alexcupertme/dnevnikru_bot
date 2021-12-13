import mongoose from "mongoose";
import { constants } from "../constants";

export class DatabaseService {
	private constructor() {
		this.connect();
	}
	connect() {
		mongoose.connect(`mongodb://${constants.mongodb.host}:27017/${constants.mongodb.db_name}`).catch((error) => console.log(error));
	}
}
