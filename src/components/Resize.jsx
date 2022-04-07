import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { FiShare } from "react-icons/fi";


const Resize = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [videoLink, setVideoLink] = useState(null)
    const handleVideoUpload = (e) => {
        e.preventDefault()
        setVideoLink(URL.createObjectURL(e.target.files[0]))

    }

    useEffect(() => {
        if (videoLink) {
            navigate("/resize")
        }
        console.log(videoLink);
        localStorage.setItem("myvideo", videoLink)
        dispatch({ type: "SET_VIDEO", payload: videoLink })
    }, [videoLink])
    return (
        <>
          
            <div className="headings">

                <h1>Resize Video</h1>
                <p>Trim and cut video to the perfect length with Kapwing</p>
                <div className="upload_btn">
                    <div class="mb-3">
                        <form action="">
                            <label htmlFor="upload" className="custom-file-upload">

                                <input className="form-control form-control-sm inputColor" type="file" id="upload" onChange={handleVideoUpload} />
                                <FiShare />
                                Upload File
                            </label>
                        </form>
                    </div>
                </div>


                

            </div>

        </>);
}

export default Resize;