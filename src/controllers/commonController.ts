const uuid=  require('uuid');
import Cart from '../models/Cart';
import { responseFormat, responseFormatError } from '../utils/methods';

exports.fetchUniqueId =async (req, res) => {
    try {
        const uniqueId = uuid.v4();
        const cart=Cart.create({
            uniqueId
        })
        await cart.save();
        responseFormat(res, cart)
    } catch (error: any) {
        responseFormatError(res, 500, "Error in Fetch UUID")
        console.error(error)
    }
}