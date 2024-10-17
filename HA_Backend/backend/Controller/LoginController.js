const express = require('express');
const app = express();
app.use(express.json());
const LoginDetails=require("../Models/LoginModel");
const Controller=async(req,res)=>{
   res.send("Working");
}
const Login=async(req,res)=>{ 
    if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
    }
    
    const { email, password } = req.body;
    try{
      const check = await LoginDetails.findOne({email:email});
      if(check && check.password === password){
        res.json({ message: "Login successful" });
      }
      else{
        res.json({ message: "Invalid credentials" });
      }
    }
    catch(e){
      res.json("Not Exist");
    }
}

const SignUp = async (req, res) => {
  const { email, password } = req.body;
  try {
      
      const check = await LoginDetails.findOne({ email: email });
      
      if (check) {
          return res.status(400).json({ message: "Email already exists" });
      } else {
          const newUser = { email: email, password: password };
          await LoginDetails.insertMany([newUser]);
          return res.status(201).json({ message: "User Registered Successfully" });
      }
  } catch (e) {
      console.error("Error during signup:", e);
      return res.status(500).json({ message: "An error occurred while processing the request" });
  }
};

exports.SignUp=SignUp;
exports.Login=Login;
exports.Test=Controller;
