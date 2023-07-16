import { User } from "../domain/entities";
import { UserRepository } from "../domain/repository/UserRepository";
import { UserEmail, UserPassword } from "../domain/value-objects";

export class LoginService {
	protected repository;
	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async run(email: string, password: string): Promise<User> {
		const userInstance = User.create(new UserEmail(email), new UserPassword(password));
		const user = await this.repository.login(userInstance);

		return user;
	}
}
