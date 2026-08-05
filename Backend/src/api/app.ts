import authRouter from "./routes/router";
import type { Request,Response } from "express";
import { Signup } from "./routes/router";


authRouter.get("/verify",(req:Request, res:Response)=>{
    res.send("working")
})
authRouter.use("/api/auth",Signup)

export {authRouter}