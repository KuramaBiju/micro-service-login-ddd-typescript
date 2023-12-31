import { UserEmail, UserPassword } from "../value-objects";

export class User {
	readonly email: UserEmail;
	readonly password: UserPassword;

	constructor(email: UserEmail, password: UserPassword) {
		this.email = email;
		this.password = password;
	}

	static create(email: UserEmail, password: UserPassword): User {
		return new User(email, password);
	}

	static fromPrimitives(plainData: { email: string; password: string }): User {
		return new User(new UserEmail(plainData.email), new UserPassword(plainData.password));
	}
}
