import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiShare } from "react-icons/fi";
import Resize from "./Resize";
import Trim from "./Trim";



const Home = () => {

    return (
        <>
            <Navbar />
            <div className="headings">
                <Resize />

                <Link to="/page2">Go to Trim Page</Link>
                {/* <Trim /> */}
            </div>
        
        </>
    );
}

export default Home;