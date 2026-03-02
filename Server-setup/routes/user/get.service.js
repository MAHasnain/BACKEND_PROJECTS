import { User } from "../../model/index.js";

const getAnUser = async (req, res) => {
    try {

        const { id } = req.params
        const user = await User.findById(id);
        res.status(200).send({
            success: true,
            message: "user fetched.",
            data: user
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

const getAllUser = async (req, res) => {
    try {

        const users = await User.find();
        
        res.status(200).send({
            success: true,
            message: "users fetched",
            users: users
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