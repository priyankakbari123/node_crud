import Role from "../models/Role";
import { responseFormat, responseFormatError } from "../utils/methods";

export const addRole = async (req, res: Response) => {
    try {
        const { name, permissions } = req.body;
        const role = Role.create({ name, permissions });

        const addedRole = await role.save();
        responseFormat(res, addedRole);
    } catch (error) {
        console.error(error);
        responseFormatError(res, 500, "Error in addRole.")
    }
};

export const updateRole = async (req, res: Response) => {
    try {
        const { id, name, permissions } = req.body;

        const role = await Role.findOneBy({ id });
        if (!role) {
            responseFormatError(res, 406, "Role you are trying to update is not found.")
        }

        role.name = name || role.name;
        role.permissions = permissions || role.permissions

        await role.save()
        responseFormat(res, role)
    } catch (error) {
        console.error(error);
        responseFormatError(res, 500, "Error in updateRole.")
    }
};

export const fetchRoles = async (req, res: Response) => {
    try {
        const pageNo: number = parseInt(req.params.pageNo);
        const perPage = parseInt(req.params.perPage) || 10;

        const options: any = {
            skip: (pageNo - 1) * perPage,
            take: perPage,
            order: { id: "ASC" },
        }

        const roles = await Role.find(options)
        responseFormat(res, roles)
    } catch (error) {
        console.error(error);
        responseFormatError(res, 500, "Error in fetchRoles.")
    }
}