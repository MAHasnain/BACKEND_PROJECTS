const getAllItems = (req, res) => {
    try {
        console.log("get all items cart");
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

const getACartItem = (req, res) => {
    try {
        console.log("req for an item of cart");
        res.status(200).send({
            message: "Fetched cart item."
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })
    }
}

export { getAllItems, getACartItem }