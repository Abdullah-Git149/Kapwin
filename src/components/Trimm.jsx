import { FiShare } from "react-icons/fi";
const Trimm = () => {
    return ( 
        <>
        <div className="headings">
                <h1>Trim Video</h1>
                <p>Trim and cut video to the perfect length with Kapwing</p>
                <div className="upload_btn">
                    <div class="mb-3">
                        <form action="">
                            <label htmlFor="upload" className="custom-file-upload">

                                <input className="form-control form-control-sm inputColor" type="file" id="upload" />
                                <FiShare />
                                Upload Fileeeee
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Trimm;