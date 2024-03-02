import express from "express";
import { upload, uploadImg, uploadImgInFolder } from "../controllers/imgController";
import { verifyToken } from "../middlewares/authMiddleware";

export const router = express.Router();

router.post('/upload', verifyToken, upload.single('upload'), uploadImg)
router.post('/upload/folder/:folder', verifyToken, upload.single('upload'), uploadImgInFolder)

export default router;