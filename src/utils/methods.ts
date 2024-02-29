import bcrypt from 'bcrypt';
import express from "express";

export const responseFormat = (response: any, data: any) => {
    response.status(200).json(data);
}

export const responseFormatError = (response: any, status: number, message: string) => {
    response.status(status).json({"messages":message});
}

export const hash = async (text: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(text, salt);
};
