import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {


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
            <input className='form-control' placeholder='Search by technologies'/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="container-fluid">
          <Row>
            <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Projects