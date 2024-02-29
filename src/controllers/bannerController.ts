import Banner from "../models/Banner";
import { responseFormat, responseFormatError } from "../utils/methods"


export const addBanner = async (req, res) => {
    try {
        const { imgName, imgUrl, order, status } = req.body;
        const banner = Banner.create({
            imgName,
            imgUrl,
            order,
            status: status || "Active",
            createdBy: "Admin"//loggedInUser
        })

        const response = await banner.save();
        responseFormat(res, response)
    } catch (error: any) {
        console.error(error)
        responseFormatError(res, 500, "Error in addBanner.")
    }
}

export const updateBanner = async (req, res) => {
    try {
        const { id, imgName, imgUrl, order, status } = req.body;
        const banner = await Banner.findOne({ where: { id } });

        if (!banner) {
            return responseFormatError(res, 404, "Banner not found.")
        }

        banner.imgName = imgName || banner.imgName;
        banner.imgUrl = imgUrl || banner.imgUrl;
        banner.order = order || banner.order;
        banner.status = status || banner.status;
        banner.updatedBy = "Admin"; //loggedin user
        await banner.save();

        responseFormat(res, banner);
    } catch (error: any) {
        console.error(error)
        responseFormatError(res, 500, "Error in updateBanner.")
    }
}

export const fetchBanners = async (req, res) => {
    try {
        const banners = await Banner.find({ where: { "status": "Active" }, order: { order: "ASC", createdAt: "DESC" } })
        responseFormat(res, banners)
    } catch (error: any) {
        console.log(error);
        responseFormatError(res, 500, "Error in fetchBanners");
    }
}