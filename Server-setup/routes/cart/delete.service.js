const deleteCartItem = async (req, res) => {
    try {

        
        res.status(200).send({
            message: "product deleted."
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

export { deleteCartItem };
