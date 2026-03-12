const updateProduct = (req, res) => {
    try {
        const productData = req.body;

        res.status(201).send({
            message: "product updated.",
            updatedProduct: productData
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

export { updateProduct };