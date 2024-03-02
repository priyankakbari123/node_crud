import connectDB from "./src/database";
import userRoutes from "./src/routes/userRoutes";
import commonRoutes from "./src/routes/commonRoutes";
import imgRoutes from "./src/routes/imgRoutes";
import bannerRoutes from './src/routes/bannerRoutes';
import bannerPublicRoutes from './src/routes/bannerPublicRoutes';
import userPublicRoutes from "./src/routes/userPublicRoutes";
import roleRoutes from "./src/routes/roleRoutes";

const express = require("express");

const app = express();

connectDB

app.use(express.json())
//routes
app.use('/user', userRoutes)
app.use('/user/public', userPublicRoutes)
app.use('/role', roleRoutes)
app.use('/common', commonRoutes)
app.use('/img', imgRoutes)
app.use('/banner', bannerRoutes)
app.use('/banner/public', bannerPublicRoutes)


app.listen(3000, () => {
    console.log("Server Stated on Port 3000")
})