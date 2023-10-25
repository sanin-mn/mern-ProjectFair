import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'


function HomeProjects() {
  return (
    <>
    <h1 className='text-center mb-5'>Explore Projects</h1>
    <Row>
        <Col sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
    </Row>
    <div className='text-center mb-5'><Link to={'/projects'}>View More Projects</Link></div>
    </>
  )
}

export default HomeProjects