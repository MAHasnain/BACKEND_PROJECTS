import logger from "../../logger/winston.logger.js";
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
                success: false,
                message: "Something went wrong",
                error: error
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
        logger.error(error)
        res.status(500).send(
            {
                success: false,
                message: "Something went wrong",
                error: error
            }
        )
    }
}

export { getAllUser, getAnUser }