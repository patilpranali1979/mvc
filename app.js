const express = require('express');
const app = express();

const { connectDB } = require('./config/db');

const empRouter = require('./routes/empRouter');

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get("/", (req, resp) => {
    resp.send("Welcome to Employee Management System");
});

// Employee Router
app.use("/employee", empRouter);

// Server Start
connectDB.then(() => {
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    });
});