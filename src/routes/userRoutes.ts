import express from "express";
import { addUser, fetchUsers, getUserById, updatePwd, updateUser } from "../controllers/usercontroller";
import { verifyToken } from "../middlewares/authMiddleware";

export const router = express.Router();


router.post('/add', verifyToken, addUser)
router.patch('/update', verifyToken, updateUser)
router.patch('/pwd/update', verifyToken, updatePwd)
router.get('/fetch/pageNo/:pageNo', verifyToken, fetchUsers)
router.get('/fetch/id/:id', verifyToken, getUserById)


export default router;