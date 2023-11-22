import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../services/allApis'

function Projects() {
  const [allProjects, setAllProjects] = useState([])

  const getAllProjects = async (token) => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await allProjectsAPI(reqHeader)
    if (result.status === 200) {
      setAllProjects(result.data)
    } else {
      alert(result.response.data)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      getAllProjects(token)
    }else{
      alert("Please Login")
    }
  }, [])

  return (
    <div>
      {/* header */}
      <Header />
      {/* All projects */}
      <div className='text-center' style={{ marginTop: '100px' }}>
        <h1 className='mt-5'>All Projects</h1>
        {/* search */}
        <div className='d-flex mt-5 justify-content-center w-100 mb-5'>
          <div className="d-flex align-items-center border rounded w-50">
            <input className='form-control' placeholder='Search by technologies' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="container-fluid">
          <Row>
            {allProjects.length > 0 ? allProjects.map(projects => (
              <Col sm={12} md={6} lg={4}>
                <ProjectCard project={projects}/>
              </Col>
            )) : null

            }
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Projects