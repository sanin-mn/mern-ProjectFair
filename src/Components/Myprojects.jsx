import React from 'react'
import AddProjects from './AddProjects'

function Myprojects() {
    return (
        <div className='card shadow p-2'>
            <div className="d-flex">
                <h3>My Projects</h3>
                <div className="ms-auto"> <AddProjects /></div>
            </div>
            <div className="mt-4">
                {/* display user projects */}
                <div className="border d-flex align-items-center rounded p-2">
                    <h5>Project Title</h5>
                    <div className="icons ms-auto">
                        <button className='btn me-2'><i class="fa-solid fa-edit"></i></button>
                        <button className='btn me-2'><i class="fa-brands fa-github"></i></button>
                        <button className='btn me-2'><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <p className='text-danger fs-4'>No projects Uploaded!!!</p>
            </div>
        </div>
    )
}

export default Myprojects