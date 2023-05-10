import './FormSubmittingPage.css'
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import backendAddress from '../../backend-address.json';
import { FileUploader } from "react-drag-drop-files";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// I will provide the firebase-config.json file on ClickUp
import firebaseConfig from '../../firebase-config.json';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'reports');

function FormSubmittingPage(){
    const [fileUploaded, setFileUploaded] = useState(false)
    const [formData, setFormData] = useState({title: '', file: null, country: '', onBehalfOf: '', submitter: ''})
    const [submitting, setSubmitting] = useState(false)
    const removeBtn = useRef(null)
    const uploadBtn = useRef(null)
    const formSubmitContainer = useRef(null)
    const line1 = useRef(null)
    const line2 = useRef(null)
    const line3 = useRef(null)
    const [line2Text, setLine2Text] = useState("or")
    const fileTypes = ["DOCX", "PDF", "DOC"]
    const navigate = useNavigate()

    useEffect(() => {
        if(fileUploaded){
            removeBtn.current.style.display = 'block'
            uploadBtn.current.style.backgroundColor = '#00b088'
            setTimeout(() => {
                removeBtn.current.style.opacity = '1'
                removeBtn.current.style.width = '25%'
                uploadBtn.current.style.width = '70%'
            }, 1);
            displayFileName()
        }
        else{
            removeBtn.current.style.opacity = '0'
            removeBtn.current.style.width = '0%'
            uploadBtn.current.style.width = '100%'
            uploadBtn.current.style.backgroundColor = '#b0b0b0'
            setTimeout(() => {
                removeBtn.current.style.display = 'none'
            }, 500);
            displayTips()
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
            formSubmitContainer.current.style.boxShadow = '0 0 20px 0 rgba(0, 0, 0, 0.2)'
            line1.current.style.opacity = '0'
            line2.current.style.opacity = '0'
            line3.current.style.opacity = '0'
            setTimeout(() => {
                setLine2Text("Drop here")
                line2.current.style.opacity = '1'
                line2.current.style.scale = '2'
            }
            , 150);
        }
        else{
            formSubmitContainer.current.style.scale = '1'
            formSubmitContainer.current.style.boxShadow = 'none'
            if(fileUploaded){
                displayFileName()
                return
            }
            displayTips()
        }
    }

    function displayFileName(){
        setTimeout(() => {
            line1.current.style.opacity = '0'
            line2.current.style.opacity = '0'
            line3.current.style.opacity = '0'
        }, 100)
        setTimeout(() => {
            setLine2Text(formData.file.name)
            line2.current.style.opacity = '1'
            line2.current.style.scale = '1.5'
        },150)
    }

    function displayTips(){
        line2.current.style.scale = '1'
        line2.current.style.opacity = '0'
        setTimeout(() => {
                setLine2Text("or")
                line1.current.style.opacity = '1'
                line3.current.style.opacity = '1'
                line2.current.style.opacity = '1'
            }
            , 150);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!fileUploaded) return
        console.log(localStorage.getItem('access_token'))
        const uploadTask = uploadBytesResumable(storageRef, formData.file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setSubmitting(true)
                setFileUploaded(false)
                uploadBtn.current.style.cursor="auto"
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setSubmitting(true)
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            "title": formData.title,
                            "report_url": downloadURL,
                            "access_token": localStorage.getItem('access_token'),
                            "country": formData.country
                        })
                    };

                    let url = backendAddress.hostname+"/reports/submit"

                    fetch(url, requestOptions)
                        .then(res => res.json())
                        .then(data => {
                            if(data.detail !== undefined)
                            {
                                alert(data.detail)
                                return
                            }
                            submitSuccess(data)
                        })
                        .catch(error => {
                                console.log(error)
                            }
                        )
                })
            }
        );
    }

    function submitSuccess(data){
        toast.success("Report Submitted", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        window.location.reload()
        console.log(data)
    }

    return(
        <motion.div id='form-main-page'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <form id='form-form' onSubmit={handleFormSubmit}>
                <h1>Upload Document</h1>
                <div className="text-field" id="title-field">
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
                <div className="text-field" id="mandate--field">
                    <label htmlFor="mandate" id="mandate-title">Mandate</label>
                    <p id="mandate" name="mandate">
                        Decision 19/CMA.1, paragraph 19: requested the Chairs of the Subsidiary Body for Scientific and Technological Advice and the Subsidiary Body far implementation to issue a call for the inputs referred to in paragraphs 36 and 37 of the same decision, taking into account that such inputs should be submitted at least three months before their consideration in the technical assessment;
                    </p>
                </div>
                <div id="additional-info">
                    <div className="text-field" id="submitter-field">
                        <label htmlFor="submitter" id="label-submitter">Submitter</label>
                        <input
                            id="submitter"
                            name="submitter"
                            placeholder="Optional"
                            value={formData.submitter}
                            className="input-login"
                            onChange={(e) => setFormData({...formData, submitter: e.target.value})}
                        />
                    </div>
                    <div className="text-field" id="on-behalf-of-field">
                        <label htmlFor="on-behalf-of" id="label-on-behalf-of">On Behalf Of</label>
                        <input
                            id="on-behalf-of"
                            name="on-behalf-of"
                            placeholder="Optional"
                            value={formData.onBehalfOf}
                            className="input-login"
                            onChange={(e) => setFormData({...formData, onBehalfOf: e.target.value})}
                        />
                </div>
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
                            <h2 ref={line1} className='submit-text'>Drag and Drop here</h2>
                            <h3 ref={line2} className='submit-text'>{line2Text}</h3>
                            <h2 ref={line3} className='submit-text'>Browse Files</h2>
                        </div>
                    </FileUploader>
                </div>
                <div className="form-field" id="form-btn-field">
                    <button id="btn-form-remove" type="button" ref={removeBtn} onClick={handleRemoveClicked}>Remove</button>
                    <button id="btn-form-upload" type="submit" ref={uploadBtn} onMouseEnter={event => {if(fileUploaded)event.target.style.cursor="pointer"}} onMouseLeave={event => {if(fileUploaded)event.target.style.cursor="auto"}}>
                        {!submitting&& (fileUploaded? "Upload" : "Please Select a File First")}
                        {
                            submitting&&
                            <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        }
                    </button>
                </div>
            </form>
        </motion.div>
    )
}
export default FormSubmittingPage