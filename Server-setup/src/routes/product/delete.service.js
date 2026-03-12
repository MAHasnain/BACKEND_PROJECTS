const deleteProduct = (req, res) => {
    try {

        res.status(200).send({
            message: "delete Product "
        })

    } catch (error) {
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

export { deleteProduct };