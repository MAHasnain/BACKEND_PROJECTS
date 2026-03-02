import { User } from "../../model/index.js";

export const registerUser = async (req, res) => {
    try {

        const userdata = req.body;

        const user = new User(userdata);
        // console.log(userdata);
        await user.save()
        res.status(201).send({
            success: true,
            message: "user register",
            user: user
        })
        // console.log("user register request send.");

    } catch (error) {

        res.status(500).send({
            success: false,
            message: "Something went wrong.",
            error: `Error : ${error}`
        })
    }
}

export const loginUser = (req, res) => {
    try {

        const userdata = req.body;
        res.status(200).send({
            success: true,
            message: "user loggedin",
            user: userdata
        })
        console.log("user login request send.");

    } catch (error) {

        res.status(500).send({
            success: false,
            message: "Something went wrong.",
            error: `Error : ${error}`
        })
    }
}

