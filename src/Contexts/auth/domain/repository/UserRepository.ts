import { User } from "../entities";

export interface UserRepository {
	login(user: User): Promise<User>;
	//loginWithGoogle(email: string, googleId: string): Promise<User>;
	//loginWithFacebook(email: string, facebookId: string): Promise<User>;
}
