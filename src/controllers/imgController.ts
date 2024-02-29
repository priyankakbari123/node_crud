import { responseFormat, responseFormatError } from "../utils/methods"
import multer from "multer"
import sharp from "sharp"

export const upload = multer({
    limits: {
        fileSize: 10485760 //10MB
    },
    fileFilter(_req, file, cb) {
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|PNG|png|webp|WEBP)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(null, true)
    }
})

export const uploadImg=async(req,res)=>{
    try{
        if (!req.file) {
            responseFormatError(res,406,"No file uploaded.");
        }

        const fileName = `images/${req.file.originalname.replace(/\.[^/.]+$/, '')}.webp`; // Change the file extension to .webp
        await sharp(req.file.buffer)
            .webp()
            .toFile('public/'+fileName);

        responseFormat(res,{ imgPath: fileName });

    }catch(error:any){
        responseFormatError(res, 500, "Error in Upload Img.")
        res.status(500)
        console.error(error)
    }
}

export const uploadImgInFolder=async(req,res)=>{
    try{
        const {folder} =req.params;
        if (!req.file) {
            responseFormatError(res,406,"No file uploaded.");
        }

        const fileName = `images/${folder}/${req.file.originalname.replace(/\.[^/.]+$/, '')}.webp`; // Change the file extension to .webp
        await sharp(req.file.buffer)
            .webp()
            .toFile('public/'+fileName);

        responseFormat(res,{ imgPath: fileName });

    }catch(error:any){
        console.error(error)
        responseFormatError(res, 500, "Error in uploadImgInFolder.")
    }
}
