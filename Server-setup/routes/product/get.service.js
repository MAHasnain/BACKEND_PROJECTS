const getAllProducts = (req, res) => {

    try {

        res.status(200).send({ message: "Products fetched." })
    } catch (error) {
        console.log(`error: ${error}`);
        res.status(500).send({ message: "Something went wrong" })
    }

}

const getProductById = (req, res) => {

    try {
        res.status(200).send({ message: `Product fetched.` })
    } catch (error) {
        console.log(`error: ${error}`);
        res.status(500).send({ message: "Something went wrong", error: error })
    }
}

export { getAllProducts, getProductById }