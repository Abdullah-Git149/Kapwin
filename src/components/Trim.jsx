import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiShare } from "react-icons/fi";


const Trim = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [videoTrimLink, setVideoTrimLink] = useState(null)
    const handleVideoUploadd = (e) => {
        e.preventDefault()
        setVideoTrimLink(URL.createObjectURL(e.target.files[0]))

    }

    useEffect(() => {
        if (videoTrimLink) {
            navigate("/trim")
        }
        console.log(videoTrimLink);
        localStorage.setItem("myvideo", videoTrimLink)
        dispatch({ type: "SET_TRIM_VIDEO", payload: videoTrimLink })
    }, [videoTrimLink])
    return (
        <>
            <div className="headings">
                <h1>Trim Video</h1>
                <p>Trim and cut video to the perfect length with Kapwing</p>
                <div className="upload_btn">
                    <div className="mb-3">
                        <form action="">
                            <label htmlFor="upload" className="custom-file-upload">
                            
                                    <input className="form-control form-control-sm inputColor" type="file" id="upload" onChange={handleVideoUploadd} />
                             
                                <FiShare />
                                Upload File 
                            </label>
                        </form>
                    </div>
                </div>
            </div>

        </>);
}

export default Trim;