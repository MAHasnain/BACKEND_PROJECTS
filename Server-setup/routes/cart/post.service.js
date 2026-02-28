const newCartItem = ( req, res ) => {
    try {
        const item = req.body;
        res.status(200).send({
            message: "item added",
            cartItem: item
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong", error: error })
    }
}

export {newCartItem}