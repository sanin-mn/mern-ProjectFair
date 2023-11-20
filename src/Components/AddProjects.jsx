import React, { useState,useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddProjectAPI } from '../services/allApis';

function AddProjects() {
    const [show, setShow] = useState(false);
    const [token,setToken] = useState("")
    const [projectDetails,setProjectDetails] = useState({
        title:"",language:"",github:"",website:"",overview:"",image:"",userId:""
    })
    const [preview,setPreview] = useState("")
    useEffect(()=>{
        if(localStorage.getItem("existingUser") && sessionStorage.getItem("token")){
          setProjectDetails({...projectDetails,userId:JSON.parse(localStorage.getItem("existingUser"))._id})
          setToken(sessionStorage.getItem("token"))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      useEffect(()=>{
        if(projectDetails.image){
            setPreview(URL.createObjectURL(projectDetails.image))
        }
      },[projectDetails.image])
      console.log(projectDetails);

    const handleClose = () => {
        setShow(false)
        setPreview("")
        setProjectDetails({
            title:"",language:"",github:"",website:"",overview:"",image:"",userId:""
        })

    };
    const handleShow = () => setShow(true);
    const handleSave = async (e) =>{
        e.preventDefault()
        const {title,language,github,website,overview,image,userId} = projectDetails
        if(!title || !language || !github || !website || !overview || !image || !userId){
            toast.info("Please fill the form completely")
        }else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("language",language)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("overview",overview)
            reqBody.append("projectImage",image)
            reqBody.append("userId",userId)
            const reqHeader = {
                "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
            }
            const result = await AddProjectAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
                toast.success(`Project ${result.data.title} added successfully...`)
                setProjectDetails({
                    title:"",language:"",github:"",website:"",overview:"",image:""
                })
                handleClose()
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add projects
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="profileimg" className='text-center'>
                                <input id='profileimg' onChange={e=>setProjectDetails({...projectDetails,image:e.target.files[0]})} type="file" style={{ display: 'none' }} />
                                <img height={'200px'} width={'200px'} className='rounded-circle' src={preview?preview:"https://tse4.explicit.bing.net/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&pid=Api&P=0&h=180"} alt="pp" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  className='form-control' placeholder='Project name' value={projectDetails.title}
                            onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                            <input type="text" className='form-control' placeholder='Language used' value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})} />
                            <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github}
                            onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                            <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website}
                            onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                        </div>
                        <input type="text" className='form-control' placeholder='Overview' value={projectDetails.overview}
                            onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='top-right' autoClose={2000} theme='colored'/>
        </>
    )
}

export default AddProjects