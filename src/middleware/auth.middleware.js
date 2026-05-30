import jwt from "jsonwebtoken";
import { userModel } from "../models/user.schema.js";
export const authMiddleware = async (req, res, next)=>{
    try {
            const token = req.cookies.jwt_secret;

            if(!token){
                return res.status(400).json({
                    message: "Token not found"
                })
            }
        
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
            if(!decoded){
                return res.status(400).json({
                    message: "Unauthorized Access"
                })
            }
        
            const userId = decoded.id;
            if(!userId){
                return res.status(400).json({
                    message: "Unauthorized Access"
                })
            }
            
            console.log(userId);
            
            const user = await userModel.findById(userId);
        
            if(!user){
                return res.status(400).json({
                    message: "Unauthorized Access"
                })
            }

            req.user = user; 
            
            next();
    } catch (error) {
        if(error.name == "TokenExpiredError"){
            return res.status(400).json({
                message: "Token expired"
            })
        }

        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}