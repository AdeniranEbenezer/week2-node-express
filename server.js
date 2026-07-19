const express = require("express");
require("dotenv").config();

const app = express();

// Parse JSON data
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log("Request:", req.method, req.url);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});

// Create user
app.post("/user", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required."
        });
    }

    res.json({
        message: "Hello " + name + "!"
    });
});

// Get user by ID
app.get("/user/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "User " + id + " profile"
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});