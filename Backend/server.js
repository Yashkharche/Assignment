import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './route/productRoute.js';
import authRouter from './route/authRoute.js';
import cookieParser from 'cookie-parser';
dotenv.config();


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use('/api',productRouter)
app.use('/api',authRouter);
app.use((err,req,res,next)=>{
    const status=err.statusCode || 500;
    const message=err.message || "Internal server error";

    return res.status(status).json(message);
})


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error.message);
})

app.listen(process.env.PORT,()=>{
    console.log(`server running at port:${process.env.PORT}`)
})

