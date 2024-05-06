import jwt from "jsonwebtoken";

export const verifyAdmin=(req,res,next)=>{
    const token=req.cookies.access_token;
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

   try {
     const decoded=jwt.verify(token,"bdwedjbejdknkjnwjndjdj");
     if(decoded.role!=='admin'){
        return res.status(403).json("you are not allowed to do this task")
     }

     next();
   } catch (error) {
     next(error)
   }
} 