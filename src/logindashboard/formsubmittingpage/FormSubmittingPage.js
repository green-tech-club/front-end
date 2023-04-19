import './FormSubmittingPage.css'
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import { FileUploader } from "react-drag-drop-files";


function FormSubmittingPage(){
    const [fileUploaded, setFileUploaded] = useState(false)
    const [formData, setFormData] = useState({title: '', file: null})
    const removeBtn = useRef(null)
    const uploadBtn = useRef(null)
    const formSubmitContainer = useRef(null)
    const fileTypes = ["DOCX", "PDF", "DOC"]

    useEffect(() => {
        if(fileUploaded){
            removeBtn.current.style.display = 'block'
            uploadBtn.current.style.backgroundColor = '#00b088'
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
            uploadBtn.current.style.backgroundColor = '#b0b0b0'
            setTimeout(() => {
                removeBtn.current.style.display = 'none'
            }, 500);
        }
    }, [fileUploaded])

    function handleRemoveClicked(e){
        setFormData({...formData, file: null, title: ''})
        setFileUploaded(false)
    }

    const handleFileChange = (file) => {
        if (file) {
            setFormData({
                ...formData,
                file: file,
                title: formData.title || file.name.split('.')[0]
            })
            setFileUploaded(true)
        }
    }

    const handleFileDrag = (state) => {
        console.log(state)
        if(state){
            formSubmitContainer.current.style.scale = '1.02'
            formSubmitContainer.current.style.boxShadow = '0 0 20px 0 rgba(0, 0, 0, 0.5)'
        }
        else{
            formSubmitContainer.current.style.scale = '1'
            formSubmitContainer.current.style.boxShadow = '0 0 15px 0 rgba(0, 0, 0, 0.3)'
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!fileUploaded) return
        console.log(formData)
    }

    return(
        <motion.div id='form-main-page'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <form id='form-form' onSubmit={handleFormSubmit}>
                <h1>Upload Document</h1>
                <div className="form-field" id="title-field">
                    <label htmlFor="title" id="label-title">Title</label>
                    <input
                        id="title"
                        name="title"
                        placeholder="Optional"
                        value={formData.title}
                        className="input-login"
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                </div>
                <div className="form-field">
                    <h2>Document</h2>
                    <FileUploader
                        types={fileTypes}
                        handleChange={handleFileChange}
                        multiple={false}
                        fileOrFiles={formData.file}
                        dropMessageStyle={{display: 'none'}}
                        onDraggingStateChange={handleFileDrag}
                    >
                        <div id='form-submit-container' ref={formSubmitContainer}>
                            <h2>Drag and Drop here</h2>
                            <h3>or</h3>
                            <h2>Browse Files</h2>
                        </div>
                    </FileUploader>
                </div>
                <div className="form-field" id="form-btn-field">
                    <button id="btn-form-remove" type="button" ref={removeBtn} onClick={handleRemoveClicked}>Remove</button>
                    <button id="btn-form-upload" type="submit" ref={uploadBtn}>{fileUploaded? "Upload" : "Please Select a File First"}</button>
                </div>
            </form>
        </motion.div>
    )
}
export default FormSubmittingPage