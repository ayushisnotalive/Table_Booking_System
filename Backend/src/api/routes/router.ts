import { Router } from "express";
import type {Response} from "express";
import { signup } from "../../modules/signup/signup";
import { authenticate } from "../middleware/authenticate";
import { verifyCsrf } from "../middleware/csrf";
import { loginLimiter,registerLimiter, refreshLimiter  } from "../middleware/rate_limit";
import { registerSchema } from "../../infrastructure/services/auth.validator";
import { validate } from "../middleware/validator";

const authRouter = Router();

authRouter.get("/",(_,res:Response)=>{
    res.json({
        success: true,
        message : "resturant booking system"
    })
})

export const  Signup = authRouter.post("/signup", signup)

export default authRouter;