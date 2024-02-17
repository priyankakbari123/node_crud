import connectDB from "./src/database";
import userRoutes from "./src/routes/userRoutes";
const express=require("express");

const app=express();
connectDB

app.use(express.json())
//routes
app.use('/user',userRoutes)

app.listen(3000,()=>{
    console.log("Server Stated on Port 3000")
})