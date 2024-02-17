import {DataSource } from "typeorm";
import User from "./models/User";
require('dotenv').config()

const connectDB= new DataSource({
    type:'mysql',
    host:process.env.MYSQL_HOST,
    port:parseInt(process.env.MYSQL_PORT),
    username:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD.toString(),
    database:process.env.MYSQL_DATABASE,
    logging:false,
    synchronize:true,
    entities:[User]
})

connectDB.initialize()
.then(()=>console.log('Datesource has been initialized.'))
.catch((error:any)=>console.error("Data Source Initiliation Error",error))

export default connectDB;
