import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { MdFitScreen, MdOutlineFitScreen, MdOutlineAdd, MdOutlineRemove } from "react-icons/md";


const ResizeEditPage = () => {
    const { videolink } = useSelector((state) => state.VideoReducer);
    const [count, setCount] = useState(100)



    console.log(count)
    const Decrement = () => {
        setCount(count - 1)
    }
    const Increment = () => {
        setCount(count + 1)
    }
    const changeValue = (e) => {
        console.log(e.target.value)
        const select = document.getElementById("demo").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Instagram">Instagram</option><option value="Facebook">Facebook</option><option value="Youtube">Youtube</option><option value="Vimeo">Vimeo</option></select>`
        const selec1 = document.getElementById("demo1").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Feed LandScape">Feed LandScape</option><option value="Portrait">Portrait</option></select>`
        // const mySelect = document.getElementById("demo")
        // let newoption = document.createElement("select")
        // const select = mySelect.appendChild(newoption)
        // const socialList = ["Instagram", "Facebook", "Youtube"]
        // for (let social of socialList) {
        //     let newOptionItem = document.createElement("option")
        //     newOptionItem.innerText = social
        //     select.appendChild(newOptionItem)
        // }
        console.log(select)

    }
    const changeValue2 = (e) => {
        console.log(e.target.value)
        const select = document.getElementById("demo").innerHTML = `<select name="cars" id="cars"><option value="Aspect Ratio 16:9">Aspect Ratio 16:9</option><option value="Aspect Ratio 4:3">Aspect Ratio 4:3</option><option value="Aspect Ratio 21:9">Aspect Ratio 21:9</option><option value="audi">Audi</option></select>`
        const selec1 = document.getElementById("demo1").innerHTML = `<select name="cars" id="cars" className="select_design"><option  value="Feed LandScape">Feed LandScape</option><option value="Portrait">Portrait</option></select>`

        // const mySelect = document.getElementById("demo")
        // let newoption = document.createElement("select")
        // const select = mySelect.appendChild(newoption)
        // const socialList = ["vimeo", "Facebook", "Youtube"]
        // for (let social of socialList) {
        //     let newOptionItem = document.createElement("option")
        //     newOptionItem.innerText = social
        //     select.appendChild(newOptionItem)
        // }
        console.log(select)
    }
    const data = localStorage.getItem("myvideo")

    return (
        <>
            <div className="editpage">
                <div className="upper">

                    <h1 style={{ color: "white" }}>Video Resize</h1>
                    <button>Export Video</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-6 col-sm-12 editpage_1" >
                            <div className="resize">
                                <ReactPlayer url={data} loop={true} width="100%" height="100%" controls={true} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 editpage_2" >
                            <div className="slider">
                                <div className="ratioBtn">
                                    <label htmlFor="present">Preset</label>
                                    <input type="radio" name="selectMode" id="preset" value="preset" onClick={changeValue} />
                                    <label htmlFor="custom">Custom</label>
                                    <input type="radio" name="selectMode" id="preset" value="custom" onClick={changeValue2} />
                                </div>
                                <div>
                                    <p id="demo"></p>
                                    <p id="demo1"></p>

                                </div>
                                <div className="slider_1">
                                    <button><MdFitScreen /> Fit</button>
                                    <button><MdOutlineFitScreen /> Fill</button>
                                </div>
                                <div className="slider_2">
                                    <ul>
                                        <li onClick={Decrement} ><MdOutlineRemove /> </li>
                                        <li>{count}</li>
                                        <li onClick={Increment}><MdOutlineAdd /> </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default ResizeEditPage;