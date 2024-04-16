// require('dotenv').config({ path: './env' })
//  to break the consistency of the code above line 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})




connectDB()
    // return promises for connect mongodb using async functions
    // so we handle this
    .then(() => {
        // start the server app with mongodb server
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on port${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB FAILED: " + err);
    })









/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error:", error);
        throw err
    }
})()*/