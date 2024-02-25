import User from "../models/User";
import { responseFormat, responseFormatError } from "../utils/methods";

exports.addUser=async(req,res)=>{
    try {
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

        responseFormat(res, user)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Adding User")
    }
}

exports.fetchUsers=async(req,res)=>{
    try {
        const pageNo: number = parseInt(req.params.pageNo);
        const perPage = parseInt(req.params.perPage) || 10;

        const options: any = {
            skip: (pageNo - 1) * perPage,
            take: perPage
        }

        const users = await User.find(options);
        responseFormat(res, users)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Fetching Users")
    }
}