import { useSelector } from "react-redux";
import VideoEditor from "../Video_Editor/VideoEditor";
import { FaPlus, FaCcMastercard } from "react-icons/fa";

const TrimEditPage = () => {
    const { trimVideoLink } = useSelector((state) => state.VideoReducer);


    const data = localStorage.getItem("myvideo")


    const changeValue = (e) => {
        console.log(e.target.value)
    }

    const addTimeInput = () => {
        const div = document.getElementById("timeInput")
        const input = document.createElement("input")
        const input2 = document.createElement("input")
        const p = document.createElement("p")


        input.classList.add("inputs")
        input2.classList.add("inputs")
        div.append(input, p.innerHTML = "to", input2)
    }
    return (
        <>
            <div className="editpage">
                <div className="upper">

                    <h1 style={{ color: "white" }}>Trim Video</h1>
                    <button>Export Video</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-6 col-sm-12 editpage_1" >
                            <div className="trim">
                                <VideoEditor />

                                {/* <ReactPlayer url={data} loop={true} width="100%" height="100%" controls={true} /> */}
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 editpage_2" >
                            <div className="slider">
                                <div className="ratioBtn">
                                    <span> <label htmlFor="present"> Extract Selected</label></span>
                                    <input type="radio" name="selectMode" id="preset" value="preset" onClick={changeValue} style={{ marginRight: "5px" }} />
                                    <label htmlFor="custom">Delete Selected</label>
                                    <input type="radio" name="selectMode" id="preset" value="custom" onClick={changeValue} />
                                </div>

                                {/* <div className="slider_1">
                                    <button><MdFitScreen /> Fit</button>
                                    <button><MdOutlineFitScreen /> Fill</button>
                                </div> */}
                                <div className="time_section">
                                    <span>Cut from ,sec </span>


                                    <div className="input__parent">
                                        <input type="text" className="inputs" disabled />
                                        <span>to</span>
                                        <input type="text" className="inputs" disabled />
                                    </div>
                                    <button onClick={addTimeInput}><FaPlus /></button>
                                    <div id="timeInput"></div>
                                </div>

                                <div>
                                    <label htmlFor="crossFade">Crossfade</label>
                                    <input type="radio" id="crossfade" style={{ margin: "5px" }} />
                                </div>
                                <div className="video_option">
                                    <select name="" id="">
                                        <option value="Mp4">Mp4</option>
                                        <option value="AVI">AVI</option>
                                        <option value="MKV">MKV</option>
                                        <option value="webm">webm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default TrimEditPage;