import * as bcrypt from "bcrypt";

import { User } from "../../domain/entities";
import { UserRepository } from "../../domain/repository/UserRepository";
import { User as UserModel } from "../models/User";

export class SequalizeUserRepository implements UserRepository {
	async login(user: User): Promise<User> {
		const userFound: UserModel | null = await UserModel.findOne({
			where: {
				email: user.email.getEmail(),
			},
		});

		if (!userFound) {
			throw new Error("Usuario no encontrado");
		}

		const validPassword: boolean = await bcrypt.compare(
			user.password.getPassword(),
			userFound.password
		);

		if (!validPassword) {
			throw new Error("Contraseña incorrecta");
		}

		return User.fromPrimitives({
			email: userFound.email,
			password: userFound.password,
		});
	}
}
