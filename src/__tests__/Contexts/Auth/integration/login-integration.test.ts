/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { UserLoginController } from "../../../../apps/backend";
import sequelizeConnection from "../../../../apps/backend/config/SequalizeConnection";
import { LoginService } from "../../../../Contexts/auth/application";
import { SequalizeUserRepository } from "../../../../Contexts/auth/infraestructure/repository/SequalizeUserRepository";

describe("Integration Login", () => {
	const repository = new SequalizeUserRepository();
	const service = new LoginService(repository);
	const controller = new UserLoginController(service);

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
		const user = await controller.__invoke("jeronimoledesma0@gmail.com", "asdasd");
		expect(user).toBeDefined();
	});
});
