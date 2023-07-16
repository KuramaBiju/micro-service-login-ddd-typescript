import { Request, Router } from "express";
import httpStatus from "http-status";

import { LoginService } from "../../../Contexts/auth/application";
import { SequalizeUserRepository } from "../../../Contexts/auth/infraestructure/repository/SequalizeUserRepository";
import { UserLoginController } from "../controller/UserLoginController";

const userRouter = Router();
interface ReqBody {
	email: string;
	password: string;
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.post("/login", async (req: Request<unknown, unknown, ReqBody>, res) => {
	const userRepository = new SequalizeUserRepository();
	const loginService = new LoginService(userRepository);
	const userLoginController = new UserLoginController(loginService);

	const email: string = req.body.email;
	const password: string = req.body.password;

	const user = await userLoginController.__invoke(email, password);

	return res.status(httpStatus.OK).send(user);
});

export default userRouter;
