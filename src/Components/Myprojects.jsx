import React, { useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { userProjectAPI } from '../services/allApis'

function Myprojects() {
    const [projects, setProjects] = useState([])
    const [token, setToken] = useState("")
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])
    const getUserProjects = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        const result = await userProjectAPI(reqHeader)
        console.log(result);
        if (result.status === 200) {
            setProjects(result.data)
        } else {
            alert(result.response.data)
        }
    }
    useEffect(()=>{
        if(token){
            getUserProjects()
        }
    },[token])

    return (
        <div className='card shadow p-2'>
            <div className="d-flex">
                <h3>My Projects</h3>
                <div className="ms-auto"> <AddProjects /></div>
            </div>
            <div className="mt-4">
                {/* display user projects */}

                {
                projects?.length>0 ? projects?.map(project=>(
                    <div className="border d-flex align-items-center text-primary rounded p-2 mb-3">
                        <h5>{project?.title}</h5>
                        <div className="icons ms-auto">
                            <button className='btn me-2'><i class="fa-solid fa-edit"></i></button>
                            <a className='btn me-2' href={project?.github} target='_blank' rel="noreferrer" ><i class="fa-brands fa-github"></i></a>
                            <button className='btn me-2'><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    )) :
                    <p className='text-danger fs-4'>No projects Uploaded!!!</p>
                }
            </div>
        </div>
    )
}

export default Myprojects