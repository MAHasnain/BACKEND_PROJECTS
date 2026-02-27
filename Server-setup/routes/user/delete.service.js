const deleteUser = (req, res) => {
    try {
        
        res.status(201).send(
            {
                success: true,
                message: "user deleted",
            }
        )

    } catch (error) {

        console.log(`Error: ${error}`);
        res.status(500).send({
            message: "Something went wrong"
        })
    }

}

export { deleteUser }