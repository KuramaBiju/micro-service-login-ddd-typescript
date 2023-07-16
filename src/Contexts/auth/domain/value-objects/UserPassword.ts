export class UserPassword {
	private readonly password: string;

	constructor(value: string) {
		this.ensurePasswordHasAtLeast6Characters(value);
		//this.ensurePasswordHasAtLeast1Number(value);
		//this.ensurePasswordHasAtLeast1SpecialCharacter(value);
		this.password = value;
	}

	public getPassword(): string {
		return this.password;
	}

	private ensurePasswordHasAtLeast6Characters(password: string): void {
		if (password.length < 6) {
			throw new Error("Password should have at least 6 characters.");
		}
	}

	private ensurePasswordHasAtLeast1Number(password: string): void {
		const numberRegex = /\d/;
		if (!numberRegex.test(password)) {
			throw new Error("Password should have at least 1 number.");
		}
	}

	private ensurePasswordHasAtLeast1SpecialCharacter(password: string): void {
		const specialCharacterRegex = /\W/;
		if (!specialCharacterRegex.test(password)) {
			throw new Error("Password should have at least 1 special character.");
		}
	}
}
