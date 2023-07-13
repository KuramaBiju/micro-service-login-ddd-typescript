import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "25mb" }));
app.use(
	cors({
		origin: "*",
		methods: ["POST", "GET"],
		allowedHeaders: ["Content-Type", "Accept", "auth-token", "application"],
	})
);

app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const start = () => {
	try {
		// await connection.sync();
		app.listen(process.env.PORT, () => {
			// eslint-disable-next-line no-console
			console.log(`Server started on port ${process.env.PORT ?? 3000}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
