import connectDB from "./src/database";
import userRoutes from "./src/routes/userRoutes";
import commonRoutes from "./src/routes/commonRoutes";
import imgRoutes from "./src/routes/imgRoutes";
import bannerRoutes from './src/routes/bannerRoutes';
import bannerPublicRoutes from './src/routes/bannerPublicRoutes';

const express=require("express");

const app=express();

connectDB

app.use(express.json())
//routes
app.use('/user',userRoutes)
app.use('/common',commonRoutes)
app.use('/img',imgRoutes)
app.use('/banner',bannerRoutes)
app.use('/banner/public',bannerPublicRoutes)


app.listen(3000,()=>{
    console.log("Server Stated on Port 3000")
})