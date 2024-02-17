export const responseFormat = (res: any, data: any) => {
    res.status(200).json(data);
}

export const responseFormatError = (res: any, status: number, message: string) => {
    res.status(status).json({"messages":message});
}