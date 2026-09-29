const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("."));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const User = mongoose.model("User", new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}, { collection: "users" }));

// CREATE
app.post("/users", async (req, res) => {
    res.json(await User.create(req.body));
});

// READ
app.get("/users", async (req, res) => {
    res.json(await User.find());
});

// UPDATE
app.put("/users/:id", async (req, res) => {
    res.json(await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    ));
});

// DELETE
app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

app.listen(5000, () => {
    console.log("Server running on 5000");
});