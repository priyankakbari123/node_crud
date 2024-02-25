import express from "express";
import User from "../models/User";
const userController= require("../controllers/usercontroller");

const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ "message": "Test Successfull!" })
})

router.post('/add',userController.addUser)
router.get('/fetch/pageNo/:pageNo', userController.fetchUsers)
router.get('/fetch/id/:id', userController.getUserById)


export default router;