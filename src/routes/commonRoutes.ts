import express from "express";
const commonController = require( "../controllers/commonController"); 

export const router = express.Router();

router.get('/fetch/uniqueId',commonController.fetchUniqueId)

export default router
