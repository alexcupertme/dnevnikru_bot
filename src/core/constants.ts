export const constants = {
	apiUrl: "https://api.dnevnik.ru/v2.0",
	baseUrl: "https://dnevnik.ru/",
	loginUrl: "https://login.dnevnik.ru/login/",
	accessToken: "3hu5VRZacLn8uHTOpG7PBS5F5drdPBWO",
	personId: 1000010493564,
	eduGroup: 1847814077665489232,
	telegramToken: process.env.TELEGRAM_TOKEN,
	redis: {
		host: process.env.REDIS_LEGACY_HOST,
		port: process.env.REDIS_LEGACY_PORT,
		password: process.env.REDIS_LEGACY_PWD,
	},
	redisLocal: {
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PWD,
	},
	mongodb: {
		username: process.env.MONGO_USER,
		password: process.env.MONGO_PWD,
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		db_name: process.env.MONGO_DB_ACCESS,
	},
};
