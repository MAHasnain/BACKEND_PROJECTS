import logger from "../../logger/winston.logger.js";

const getAllItems = (req, res) => {
    try {
        logger.info("get all items cart");
        res.status(201).send()
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

const getACartItem = (req, res) => {
    try {
        logger.info("req for an item of cart");
        res.status(200).send({
            message: "Fetched cart item."
        })
    } catch (error) {
        logger.error(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

export { getAllItems, getACartItem }