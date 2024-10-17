import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login(){
    const history = useNavigate();
    const[email,setEmail]=useState('');
    const[passowrd,setPassword]=useState('');
    async function submit(e){
        e.preventDefault();
        try{
            await axios("http://localhost:5000/",{
                email,passowrd
            })
            .then(res=>{
                if(res.data=="Already Exits"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="Not Exist"){
                    alert("User Have not signed up")
                }
            })
            .catch(e=>{
                alert("Wrong Details")
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
            <h1>Login</h1>
            <form action="POST">
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
                <input type="submit" conClick={submit}/>

            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Sign Up</Link>
        </div>
        </>
    )
}
export default Login;