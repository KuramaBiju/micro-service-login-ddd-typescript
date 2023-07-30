/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { LoginService } from "../../../../Contexts/auth/application";
import { UserRepository } from "../../../../Contexts/auth/domain/repository/UserRepository";

describe("LoginService", () => {
	it("calls repository.login with the correct User", async () => {
		const mockRepository: Partial<UserRepository> = {
			login: jest.fn().mockResolvedValue({ email: "test@example.com", password: "password" }),
		};

		const service = new LoginService(mockRepository as UserRepository);
		const email = "test@example.com";
		const password = "password";

		await service.run(email, password);

		expect(mockRepository.login).toHaveBeenCalled();
	});
});
