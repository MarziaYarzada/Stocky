import express from 'express'
import cors from 'cors';
import authRoutes from './routes/auth/auth.routes';

 const app=express();
 app.use(cors());
 app.use(express.json())
 app.get('/',(req,res)=>{
    res.send(' Warehouse Inventory API is running...')
 })
 app.use('/api/auth', authRoutes);

 export default app;