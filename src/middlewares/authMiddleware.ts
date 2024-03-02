import jwt from "jsonwebtoken";
import { NextFunction, Response, Request } from 'express';
import { responseFormatError } from "../utils/methods";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string = String(req.headers.authorization);
    if (!token) {
        responseFormatError(res, 401, "Access Denied.")
    }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        req.userId = decodedToken.userId
        next();
    } catch (error) {
        responseFormatError(res, 401, "Invalid Access Token.")
    }
}