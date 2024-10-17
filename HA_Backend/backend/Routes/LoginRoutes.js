const express = require('express');
const Route = express.Router();
const EntireController = require("../Controller/LoginController");
Route.get("/",(req,res)=>{
    res.send("Hello World");
});
Route.get("/Testing-Api",EntireController.Test);
Route.post("/insert-data",EntireController.SignUp);
Route.post("/login",EntireController.Login);
module.exports = Route;