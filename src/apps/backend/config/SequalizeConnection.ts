import { Sequelize } from "sequelize-typescript";

import { User } from "../../../Contexts/auth/infraestructure/models/User";

const sequelizeConnection = new Sequelize({
	dialect: "mysql",
	host: "127.0.0.1",
	port: 8889,
	username: "root",
	password: "root",
	database: "micro-service-login",
	logging: false,
	models: [User],
});

export default sequelizeConnection;
