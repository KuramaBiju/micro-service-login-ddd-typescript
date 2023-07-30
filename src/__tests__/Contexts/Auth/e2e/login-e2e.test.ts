/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import request from "supertest";

import app from "../../../..";
import sequelizeConnection from "../../../../apps/backend/config/SequalizeConnection";

describe("Check Login", () => {
	beforeAll(async () => {
		await sequelizeConnection.sync();
	});

	afterAll(async () => {
		try {
			await sequelizeConnection.close();
		} catch (err) {
			console.error("Failed to close connection:", err);
		}
	});

	it("should return 200 when login is correct", async () => {
		const response = await request(app)
			.post("/auth/login")
			.send({
				email: "jeronimoledesma0@gmail.com",
				password: "asdasd",
			})
			.set("Accept", "application/json");
		expect(response.status).toBe(200);
	});
});
