import logger from "../../logger/winston.logger.js";
import { Product } from "../../model/index.js";

const newProduct = async (req, res) => {

    try {
        const productData = req.body;
        const product = new Product(productData);
        await product.save();

        res.status(201).send({
            success: true,
            message: "Product added.",
            data: product
        })

    } catch (error) {
        logger.error(error);
        res.status(500).send({
            success: false,
            message: "Somthing went wrong",
            error: error
        })
    }
}

export { newProduct }