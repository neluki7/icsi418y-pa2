require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

const client = new MongoClient(process.env.MONGO_URI);

const db = client.db("pa2");
const users = db.collection("users");

async function connectDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB");
        console.error(error);
    }
}

connectDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});

app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        // Checks that all fields are provided
        if (!firstName || !lastName || !username || !password) {
            return res.status(400).json({
                message: "Please fill in all fields."
            });
        }

        // Checks whether the username already exists
        const existingUser = await users.findOne({
            username: username
        });

        if (existingUser) {
            return res.status(409).json({
                message: "That username is already taken."
            });
        }

        // Creates the new user
        await users.insertOne({
            f_name: firstName,
            l_name: lastName,
            username: username,
            password: password
        });

        res.status(201).json({
            message: "Signup successful!"
        });

    } catch (error) {
        console.error("Signup error:", error);

        res.status(500).json({
            message: "Something went wrong. Please try again."
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please fill in all fields."
            });
        }

        const user = await users.findOne({
            username: username,
            password: password
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password."
            });
        }

        res.status(200).json({
            message: "Login successful!"
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ 
            message: "Something went wrong. Please try again."
        });
    }
});

app.listen(9000, () => {
    console.log("Server running on port 9000");
});