const getAnUser = (req, res) => {
    try {

        res.status(201).send({
            message: "",
            
        })

    } catch (error) {
        res.status(500).send(
            {
                message: "Something went wrong",
                Error: error
            }
        )
    }
}

const getAllUser = (req, res) => {
    try {

        res.status(200).send({
            message: "users fetched"
        })

    } catch (error) {
        res.status(500).send(
            {
                message: "Something went wrong",
                Error: error
            }
        )
    }
}

export { getAllUser, getAnUser }