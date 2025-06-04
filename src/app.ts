import express from 'express'
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import categoryRoutes from './routes/category.routes';
import productRoutes from './routes/product.routes';
import reportRoutes from './routes/report.routes';

 const app=express();
 app.use(cors());
 app.use(express.json())
 app.get('/',(req,res)=>{
    res.send(' Warehouse Inventory API is running...')
 })
 app.use('/api/auth', authRoutes);
 app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/report', reportRoutes);


 export default app;