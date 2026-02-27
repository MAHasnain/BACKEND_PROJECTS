const getAllItems = (req, res) => {
    try {
        console.log("get all items cart");
        res.status(201).send()
    } catch (error) {
        
    }
}

const getACartItem = (req, res) => {
    console.log("req for an item of cart");
}

export { getAllItems, getACartItem }