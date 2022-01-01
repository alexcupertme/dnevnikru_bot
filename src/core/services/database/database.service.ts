import { createHashSum } from "../../utils/createHashSum";
import mongoose from "mongoose";
import { constants } from "../../constants";
import { RedisService } from "../redis/redis.service";
import { fromBase64, toBase64 } from "../../../core/utils/base64";

export class DatabaseService {
	constructor() {
		this.applyMongooseCaching();
		this.applyListeners();
	}
	protected applyMongooseCaching() {
		const exec = mongoose.Query.prototype.exec;
		const client = RedisService.getInstance();
		mongoose.Query.prototype.exec = async function () {
			console.log(123);
			const key = `cacheable-db-request:${createHashSum(
				JSON.stringify({
					...this.getQuery(),
					...this.getUpdate(),
					collection: this.mongooseCollection.name,
					op: this.op,
					options: this.options,
				})
			)}`;
			const cacheValue = await client.getCache(key);

			if (cacheValue) return JSON.parse(fromBase64(cacheValue));

			const result = await exec.apply(this, arguments);
			if (result) {
				client.setCache(key, toBase64(JSON.stringify(result)), 6000);
			}
			console.log(456);
			return result;
		};
	}
	public applyListeners() {
		mongoose.connection.on("error", (error) => {
			console.error("Error in MongoDb connection: " + error);
		});
		mongoose.connection.on("connected", () => console.log("Connected to MongoDB!"));
		mongoose.connection.on("disconnected", () => {
			console.log("Disconnected from MongoDB!");
			this.connect();
		});
	}
	public connect() {
		mongoose
			.connect(`mongodb://${constants.mongodb.host}:${constants.mongodb.port}/${constants.mongodb.db_name}`, {
				auth: {
					password: constants.mongodb.password,
					username: constants.mongodb.username,
				},
				retryReads: true,
				retryWrites: true,
			})
			.catch((error) => console.log(error));
	}
}
