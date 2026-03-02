import { User } from "../../model/index.js";

const deleteUser = async (req, res) => {
    try {

        const userId = req.params.id;
        await User.findByIdAndDelete(userId)

        res.status(200).send(
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