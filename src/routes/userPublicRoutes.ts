import express from "express"
import { userLogin } from "../controllers/usercontroller";
export const router = express.Router();

router.post('/login',userLogin)

export default router;