import { addBanner, updateBanner } from "../controllers/bannerController";
import express from "express"
export const router = express.Router();

router.post('/add',addBanner)
router.patch('/update',updateBanner)

export default router;