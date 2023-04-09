import './FormSubmittingPage.css'
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

function FormSubmittingPage(){
    const [fileUploaded, setFileUploaded] = useState(false)
    const removeBtn = useRef(null)
    const uploadBtn = useRef(null)
    useEffect(() => {
        if(fileUploaded){
            removeBtn.current.style.display = 'block'
            setTimeout(() => {
                removeBtn.current.style.opacity = '1'
                removeBtn.current.style.width = '25%'
                uploadBtn.current.style.width = '70%'
            }, 1);
        }
        else{
            removeBtn.current.style.opacity = '0'
            removeBtn.current.style.width = '0%'
            uploadBtn.current.style.width = '100%'
            setTimeout(() => {
                removeBtn.current.style.display = 'none'
            }, 500);
        }
    }, [fileUploaded])

    function handleClicked(e){
        setFileUploaded(!fileUploaded)
    }

    return(
        <motion.div id='form-main-page'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <h1>Upload Document</h1>
            <div className="form-field" id="title-field">
                <label htmlFor="title" id="label-title">Title</label>
                <input
                    id="title"
                    name="title"
                    placeholder="Optional"
                    className="input-login"
                />
            </div>
            <div className="form-field">
                <h2>Document</h2>
                <div id='form-submit-container'>
                    <h2>Drag and Drop here</h2>
                    <h3>or</h3>
                    <h2>Browse Files</h2>
                </div>
            </div>
            <div className="form-field" id="form-btn-field">
                <button id="btn-form-remove" ref={removeBtn}>Remove</button>
                <button id="btn-form-upload" ref={uploadBtn} onClick={handleClicked}>{fileUploaded? "Upload" : "Please Select a File First"}</button>
            </div>
        </motion.div>
    )
}
export default FormSubmittingPage