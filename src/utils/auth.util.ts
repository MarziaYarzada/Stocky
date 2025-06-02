import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const hashPassword=(password:string)=>{
    return bcrypt.hash(password,10)
};
export const comparePassword=(plain:string,hash:string)=>{
    return bcrypt.compare(plain,hash)
}
export const generateToken=(userId:string,role:string)=>{
    return jwt.sign({userId,role},process.env.JWT_SECRET!,{expiresIn:'5d'})
}