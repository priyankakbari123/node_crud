import { addBanner, deleteBanner, updateBanner } from "../controllers/bannerController";
import express from "express"
export const router = express.Router();

router.post('/add',addBanner)
router.patch('/update',updateBanner)
router.delete('/delete/id/:id',deleteBanner)


export default router;