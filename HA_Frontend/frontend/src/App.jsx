import React from "react"
import Login from "./Components/Login"
import Sign from "./Components/SignUp"
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Sign/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
