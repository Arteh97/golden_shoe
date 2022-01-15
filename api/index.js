const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Arteh:2BothamClose!@cluster0.d5une.mongodb.net/Shop?retryWrites=true&w=majority")


app.listen(5000, () => {
    console.log("Backend server is running!")
}).then(() => console.log("Database connection successful"));