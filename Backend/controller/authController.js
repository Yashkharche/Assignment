import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import User from '../model/userModel.js';
export const test=(req,res)=>{
    res.json({"message":"testing"});
}
export const signup=async(req,res,next)=>{
    const {name,username,password}=req.body;
  
    try {
        const response=await User.findOne({username:username});
        if(response){
            return res.status(409).json({"success":"false","message":"This username is already registered"});
        }
        const hashedPassword=bcrypt.hashSync(password,10);
        const data=await User.create({name:name,username:username,password:hashedPassword,role:"user"});
        return res.status(201).json({"message":"user created","success":"true"});
    
    } catch (error) {
        next(error);
    }
}

export const signin=async(req,res,next)=>{
    const {username,password}=req.body;
    try {
        const user=await User.findOne({username:username});
        if(!user){
            return res.status(404).json({"success":"false","message":"user not found"});
        }
        const validPassword=bcrypt.compareSync(password,user.password);
        if(!validPassword){
            res.status(401).json({"success":"false","message":"invalid username or password"});
        }
        const token=jwt.sign({id:user._id,role:user.role},"bdwedjbejdknkjnwjndjdj");
        const userWithoutPassword = (({ password, ...rest }) => rest)(user._doc);
        res.cookie('access_token',token,{
            httpOnly:true,
            expires:new Date(Date.now()+24*60*60*1000)
        }).status(200).json(userWithoutPassword)
    } catch (error) {
        next(error);
    }
}

export const addAdmin=async(req,res,next)=>{

    const {name,username,password}=req.body;
    try {
        const response=await User.findOne({username:username});
        if(response){
            return res.status(409).json({"message":"This admin name is already registered"});
        }
        const hashedPassword=bcrypt.hashSync(password,10);
        const data=await User.create({name:name,username:username,password:hashedPassword,role:"admin"});
        return res.status(201).json("admin created")
    
    } catch (error) {
        next(error);
    }
}

export const logout=(req,res,next)=>{
    try {
        res.clearCookie('access_token');
        res.status(200).json("user has been logged out")
       } catch (error) {
        next(error)
       }
    
}
