require("dotenv").config();

db.createUser({
	user: process.env.MONGO_USER,
	pwd: process.env.MONGO_PWD,
	roles: [
		{
			role: "readWrite",
			db: "dnevnikru",
		},
	],
});
