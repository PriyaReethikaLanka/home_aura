import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){
    const location = useLocation();
    return (
        <>
        <div className="homepage">
            <h1>Hello {location.state.id} Welcome</h1>
        </div>
        </>
    )
}
export default Home