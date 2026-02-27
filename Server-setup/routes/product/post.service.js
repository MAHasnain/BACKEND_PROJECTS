let products = [];

const newProduct = (req, res) => {

    try {
        const product = req.body;
        products.push(product);

        res.status(201).send({
            message: "Product added.",
            product: products
        })

    } catch (error) {
        res.status(500).send({
            message: "Somthing went wrong",
            error: error
        })
    }
}

export { newProduct }