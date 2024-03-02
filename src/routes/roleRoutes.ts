import express from "express";
import { verifyToken } from "../middlewares/authMiddleware";
import { addRole, fetchRoles, updateRole } from "../controllers/roleController";

const router = express.Router();

router.post('/add', verifyToken, addRole)
router.patch('/update', verifyToken, updateRole)
router.get('/fetch/pageNo/:pageNo', fetchRoles)

export default router;