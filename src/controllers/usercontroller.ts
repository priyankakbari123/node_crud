import Role from "../models/Role";
import User from "../models/User";
import { hash, responseFormat, responseFormatError } from "../utils/methods";

export const addUser = async (req, res) => {
    try {
        const {
            name,
            username,
            email,
            contactNo,
            password,
            imgUrl,
            roleId
        } = req.body;

        const role = await Role.findOne({ where: { id: roleId } });
        if (!role) {
            return responseFormatError(res, 406, "Role Not Found for id " + roleId)
        }

        const hashedPwd = await hash(password);

        const user = User.create({
            name,
            username,
            email,
            contactNo,
            password: hashedPwd.toString(),
            role,
            imgUrl,
            createdBy: "Admin" //loggedInUser
        })
        await user.save()

        responseFormat(res, user)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Adding User")
        console.error(error)
    }
};

export const updateUser = async (req, res) => {
    const {
        id,
        name,
        username,
        email,
        contactNo,
        imgUrl,
        roleId,
    } = req.body;

    try {
        const user = await User.findOneBy({id:id});

        if (!user) {
            return responseFormatError(res, 406, 'User you are trying to update is not found.');
        }

        user.name = name || user.name;
        user.username = username || user.username;
        user.email = email || user.email;
        user.contactNo = contactNo || user.contactNo;
        user.imgUrl = imgUrl || user.imgUrl;
        user.role = await Role.findOneBy(roleId || user.role.id);

        user.updatedBy = 'updated_user'; // loggedInUser

        await user.save();

        responseFormat(res, user);
    } catch (error) {
        console.error('Error in updating user:', error);
        responseFormatError(res, 500, 'Error in updateUser.');
    }
};

export const fetchUsers = async (req, res) => {
    try {
        const pageNo: number = parseInt(req.params.pageNo);
        const perPage = parseInt(req.params.perPage) || 10;

        const options: any = {
            skip: (pageNo - 1) * perPage,
            take: perPage,
            relations: ['role'],
            order: { createdAt: "DESC" },
        }

        const users = await User.find(options);
        responseFormat(res, users)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Fetching Users")
    }
};

export const getUserById = async (req, res) => {
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