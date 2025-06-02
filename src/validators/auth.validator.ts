import {z} from 'zod'

export const registerSchema=z.object({
    username:z.string().min(5).max(40),
    password:z.string().min(5).max(40),
});
export const loginSchema=registerSchema;
    