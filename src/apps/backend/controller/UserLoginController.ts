import { LoginService } from "../../../Contexts/auth/application";
import { User } from "../../../Contexts/auth/domain/entities";

export class UserLoginController {
	protected login;

	constructor(login: LoginService) {
		this.login = login;
	}

	async __invoke(email: string, password: string): Promise<User> {
		const user = await this.login.run(email, password);

		return user;
	}
}
