import logger from "../../logger/winston.logger.js";
import { User } from "../../model/index.js";

const deleteUser = async (req, res) => {
    try {

        const userId = req.params.id;
        logger.info(userId)
        await User.findByIdAndDelete(userId)

        res.status(200).send(
            {
                success: true,
                message: "user deleted",
            }
        )

    } catch (error) {

        logger.error(`Error: ${error}`);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }

}

export { deleteUser }