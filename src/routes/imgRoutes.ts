import express from "express";
import { upload, uploadImg, uploadImgInFolder } from "../controllers/imgController";

export const router = express.Router();

router.post('/upload',upload.single('upload'),uploadImg)
router.post('/upload/folder/:folder',upload.single('upload'),uploadImgInFolder)

export default router;