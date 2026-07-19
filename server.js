const express = require("express");

require("dotenv").config();

const app = express();


const PORT = process.env.PORT;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});

// POST Route
app.post("/user", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required."
        });
    }

    res.json({
        message: `Hello, ${name}!`
    });

});

// GET User by ID
app.get("/user/:id", (req, res) => {

    const id = req.params.id;

    res.json({
        message: `User ${id} profile`
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});