import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiShare } from "react-icons/fi";
import Resize from "./Resize";
import Trim from "./Trim";
import Trimm from "./Trimm";


const Home = () => {

    return (
        <>
            <Navbar />
            <div className="headings">

                <Resize />
                <Trim />
                {/* <Trimm/>  */}
            </div>

        </>);
}

export default Home;