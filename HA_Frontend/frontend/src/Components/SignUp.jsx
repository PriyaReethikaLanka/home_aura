import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Sign(){
    const history = useNavigate();
    const[email,setEmail]=useState('');
    const[passowrd,setPassword]=useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios("http://localhost:5000/signup",{
                email,passowrd
            })
            .then(res=>{
                if(res.data=="Already Exits"){
                    return res.json("User Already Exists")
                }
                else if(res.data=="Not Exist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                return res.json("Wrong Details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <div className="login">
            <h1>Sign Up</h1>
            <form action="POST">
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
                <input type="submit" conClick={submit}/>

            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login</Link>
        </div>
        </>
    )
}
export default Sign;