export const registerUser = (req, res) => {
    try {

        const userdata = req.body;
        res.status(200).send({
            success: true,
            message: "user register",
            user: userdata
        })
        console.log("user register request send.");

    } catch (error) {

        res.status(500).send({
            success: false,
            message: "Something went wrong."
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
            message: "Something went wrong."
        })
    }
}

