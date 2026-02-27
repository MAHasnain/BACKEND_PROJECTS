import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use(express.json());

let data = []
app.get("/users", (req, res) => {
    try {
        res.status(200).send(data);

    } catch (error) {
        console.log({ message: `Error : ${error}` });
    }
})
app.post("/new-user", (req, res) => {
    try {
        const user = req.body;
        data.push({ user, id: Date.now().toString(36), });

        res.send({ user: req.body, message: "user added successfully" })

    } catch (error) {
        console.log({ message: `Error : ${error}` });
    }
})

app.post("/new-product", (req, res) => {
    try {
        const product = req.body.title

        data.push(product)
    } catch (error) {
        console.log(err);
    }
})

app.put("/user-update/:id", (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(obj => obj.id === id);
    data.splice(index, 1, { ...req.body[0], id })

    res.send({ user: req.body[0], message: "User successfully updated" })
})

// app.delete("/")

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})