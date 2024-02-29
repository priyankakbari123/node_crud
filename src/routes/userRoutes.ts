import express from "express";
import { addUser, fetchUsers, getUserById } from "../controllers/usercontroller";

export const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ "message": "Test Successfull!" })
})

router.post('/add',addUser)
router.get('/fetch/pageNo/:pageNo', fetchUsers)
router.get('/fetch/id/:id', getUserById)


export default router;