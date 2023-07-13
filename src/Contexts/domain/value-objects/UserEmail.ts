export class UserEmail {
	private readonly email: string;

	constructor(value: string) {
		this.ensureMaxEmailLength(value);
		this.ensureIsValidEmail(value);
		this.email = value;
	}

	public getEmail(): string {
		return this.email;
	}

	private ensureIsValidEmail(email: string): void {
		const emailRegex = /\S+@\S+\.\S+/;
		if (!emailRegex.test(email)) {
			throw new Error("Invalid email.");
		}
	}

	private ensureMaxEmailLength(email: string): void {
		if (email.length > 125) {
			throw new Error("Email should not exceed 125 characters.");
		}
	}
}
