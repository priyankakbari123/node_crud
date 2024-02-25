import express from "express";
import User from "../models/User";
import { responseFormat, responseFormatError } from "../utils/methods";
const userController= require("../controllers/usercontroller");

const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ "message": "Test Successfull!" })
})

router.post('/add',userController.addUser)

router.get('/fetch/pageNo/:pageNo', userController.fetchUsers)

export default router;