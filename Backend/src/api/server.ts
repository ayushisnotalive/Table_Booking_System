import express from "express"
import type { Request,Response } from "express"
import { env } from "../infrastructure/configs/env"
const app = express()
const PORT = env.PORT

const startServer = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            `server is running on PORT : ${PORT}`
        })
    }
}