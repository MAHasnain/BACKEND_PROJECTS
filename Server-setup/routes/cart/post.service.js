import logger from "../../logger/winston.logger.js";

const newCartItem = async( req, res ) => {
    try {
        const item = req.body;
        res.status(200).send({
            success: true,
            message: "item added",
            cartItem: item
        })

    } catch (error) {
        logger.error(error);
        res.status(500).send({ 
            success: false,
            message: "Something went wrong", 
            error: error 
        })
    }
}

export {newCartItem}