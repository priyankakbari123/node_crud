import Role from "../models/Role";
import User from "../models/User";
import { hash, responseFormat, responseFormatError } from "../utils/methods";

exports.addUser=async(req,res)=>{
    try {
        const {
            name,
            email,
            password,
            roleId
        } = req.body;


        const role=await Role.findOne({where:{id: roleId}});
        if(!role){
            return responseFormatError(res,406,"Role Not Found for id "+roleId)
        }

        const hashedPwd=await hash(password);

        const user = User.create({
            updatedBy: 'abc',
            name,
            email,
            password:hashedPwd.toString(),
            role
        })
        await user.save()

        responseFormat(res, user)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Adding User")
        console.error(error)
    }
}

exports.fetchUsers=async(req,res)=>{
    try {
        const pageNo: number = parseInt(req.params.pageNo);
        const perPage = parseInt(req.params.perPage) || 10;

        const options: any = {
            skip: (pageNo - 1) * perPage,
            take: perPage,
            relations:['role']
        }

        const users = await User.find(options);
        responseFormat(res, users)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Fetching Users")
    }
}

exports.getUserById = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const user = await User.findOne({
            where: { id: userId },
            relations: ['role'],
        });

        if (!user) {
            return responseFormatError(res, 406, 'User not found');
        }

        responseFormat(res, user);
    } catch (error) {
        console.error('Error fetching user:', error);
        responseFormatError(res, 500, 'Error fetching user');
    }
};