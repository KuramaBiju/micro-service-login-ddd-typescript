import * as bcrypt from "bcrypt";

import { User } from "../../domain/entities";
import { UserRepository } from "../../domain/repository/UserRepository";
import { User as UserModel } from "../models/User";

export class SequalizeUserRepository implements UserRepository {
	async login(user: User): Promise<User> {
		const userFound: UserModel = await this.findByEmail(user.email.getEmail());
		await this.comparePassword(user.password.getPassword(), userFound.password);

		return User.fromPrimitives({
			email: userFound.email,
			password: userFound.password,
		});
	}

	async findByEmail(email: string): Promise<UserModel> {
		const userFound: UserModel | null = await UserModel.findOne({
			where: {
				email,
			},
		});

		if (!userFound) {
			throw new Error("Usuario no encontrado");
		}

		return userFound;
	}

	async comparePassword(passwordFromRequest: string, passwordFromUser: string): Promise<void> {
		const validPassword: boolean = await bcrypt.compare(passwordFromRequest, passwordFromUser);

		if (!validPassword) {
			throw new Error("Contraseña incorrecta");
		}
	}
}
