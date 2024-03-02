import { addBanner, deleteBanner, updateBanner } from "../controllers/bannerController";
import express from "express"
import { verifyToken } from "../middlewares/authMiddleware";
export const router = express.Router();

router.post('/add', verifyToken, addBanner)
router.patch('/update', verifyToken, updateBanner)
router.delete('/delete/id/:id', verifyToken, deleteBanner)


export default router;