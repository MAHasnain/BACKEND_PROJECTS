import { Product } from "../../model/index.js";

const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find();

        res.status(200).send({
            success: true,
            message: "Products fetched.",
            data: products
        })
    } catch (error) {
        console.log(`error: ${error}`);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }

}

const getProductById = async (req, res) => {

    try {

        const { id } = req.params;
        const product = await Product.findById(id);

        res.status(200).send({
            success: true,
            message: `Product fetched.`,
            data: product,
        })
    } catch (error) {
        console.log(`error: ${error}`);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

export { getAllProducts, getProductById }