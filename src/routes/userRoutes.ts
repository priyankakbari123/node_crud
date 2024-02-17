import express from "express";
import User from "../models/User";

const router = express.Router();

router.get('/test', (req, res) => {
    res.status(200).json({ "message": "Test Successfull!" })
})

router.post('/add', async (req, res) => {
    const {
        name,
        email
    } = req.body;

    const user = User.create({
        updatedBy: 'abc',
        name,
        email
    })
    await user.save()

    res.json(user)
})

router.get('/fetch/pageNo/:pageNo', async (req, res) => {
    try {
        const pageNo: number = parseInt(req.params.pageNo);
        const perPage = parseInt(req.params.perPage) || 10;

        const options: any = {
            skip: (pageNo - 1) * perPage,
            take: perPage
        }

        const users = await User.find(options);
        res.status(200).json(users)
    } catch (error: any) {
        res.status(500).json({ "message": "Error in Fetching Users" })
    }
})

export default router;