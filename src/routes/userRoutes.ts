import express from "express";
import User from "../models/User";

const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ "message": "Test Successfull!" })
})

router.post('/add', async(req, res) => {
    const {
        name,
        email
    } = req.body;

    const user=User.create({
        updatedBy:'abc',
        name,
        email
    })
    await user.save()

    res.json(user)
})

export default router;