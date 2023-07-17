import { User as UserModel } from "../../infraestructure/models/User";
import { User } from "../entities";

export interface UserRepository {
	login(user: User): Promise<User>;
	findByEmail(email: string): Promise<UserModel>;
	comparePassword(password: string, hash: string): Promise<void>;
	//loginWithGoogle(email: string, googleId: string): Promise<User>;
	//loginWithFacebook(email: string, facebookId: string): Promise<User>;
}
