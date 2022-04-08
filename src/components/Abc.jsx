import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Trim from "./Trim";

const Abc = () => {
    return (
        <>
            <Navbar />
            <div className="headings">
                <Trim />
                <Link to="/">Go to Resize Page</Link>
            </div>
        </>
    );
}

export default Abc;