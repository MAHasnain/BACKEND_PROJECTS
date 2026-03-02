import { User } from "../../model/index.js";

const editProfile = async (req, res) => {
    try {

        const userData = req.body;
        const userId = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true })
        res.status(201).send({
            success: true,
            message: "User updated.",
            user: updatedUser
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error
        })

    }
}

export { editProfile };