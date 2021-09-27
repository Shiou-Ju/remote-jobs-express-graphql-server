const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to DB
connectDB();

// mount router
const jobs = require("./routes/jobs");

const app = express();
app.use("/graphql",  jobs);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`Server at port ${PORT}`);
