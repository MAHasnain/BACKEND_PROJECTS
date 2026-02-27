const editProfile = (req, res) => {
    try {

        const user = req.body;

        res.status(201).send({
            message: "User updated.",
            user: user
        })
    } catch (error) {
        res.status(500).send({
            message: "Something went wrong",
            error: error
        })

    }
}

export { editProfile };