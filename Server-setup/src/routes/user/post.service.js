import logger from "../../logger/winston.logger.js";
import { User } from "../../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {

        const userdata = req.body;
        const password = bcrypt.hashSync(userdata.password, 10);

        logger.info("password : ", password);
        const user = new User({ ...userdata, password });
        // console.log(userdata);

        await user.save()

        // const userWithoutPassword = await User.findById(user._id).select("-password");
        res.status(201).send({
            success: true,
            message: "user register",
            user: user
        })
        // console.log("user register request send.");

    } catch (error) {

        logger.error(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong.",
            error: `Error : ${error}`
        })
    }
}

export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {

                // token generate and send to client
                const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
                logger.info("token", token);

                res.status(200).send({
                    success: true,
                    message: "User logged in successfully.",
                    user: user

                }, { token: token });

            } else {
                res.status(401).send({
                    success: false,
                    message: "Incorrect Password."
                });
            }
        } else {
            res.status(404).send({
                error: "user not found"
            })
        }

    } catch (error) {

        logger.error(error)
        res.status(500).send({
            success: false,
            message: "Something went wrong.",
            error: `Error : ${error}`
        })
    }
}

