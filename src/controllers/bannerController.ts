import Banner from "../models/Banner";
import { responseFormat, responseFormatError } from "../utils/methods"


export const addBanner = async (req, res) => {
    try {
        const { imgName, imgUrl, order, status, redirectUrl } = req.body;
        const banner = Banner.create({
            imgName,
            imgUrl,
            order,
            status: status || "Active",
            redirectUrl: redirectUrl || "",
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
        const { id, imgName, imgUrl, order, status, redirectUrl } = req.body;
        const banner = await Banner.findOne({ where: { id } });

        if (!banner) {
            return responseFormatError(res, 406, "Banner you are trying to update is not found.")
        }

        banner.imgName = imgName || banner.imgName;
        banner.imgUrl = imgUrl || banner.imgUrl;
        banner.order = order || banner.order;
        banner.status = status || banner.status;
        banner.redirectUrl = redirectUrl || banner.redirectUrl;
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

export const deleteBanner = async (req, res) => {
    try {
        const id = req.params.id;
        const banner = await Banner.findOne({ where: { id } });

        if (!banner) {
            return responseFormatError(res, 406, "Banner you are trying to delete is not found.")
        }
        await Banner.delete(id);
        responseFormat(res, "Banner Deleted Successfully.")

    } catch (error) {
        console.error(error)
        responseFormatError(res, 500, "Error in deleteBanner.")
    }
}