import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";


function HomeProjects({ allProjects }) {
  return (
    <>
      <h1 className='text-center mb-5'>Explore Projects</h1>
      <Marquee>
        <Row style={{}}>
          {allProjects?.length > 0 ? allProjects.map(project => (

            <Col sm={12} md={6} lg={4}>
              <ProjectCard  project={project} />
            </Col>

          )):null
          }
        </Row>
      </Marquee>
      <div className='text-center mb-5'><Link to={'/projects'}>View More Projects</Link></div>
    </>
  )
}

export default HomeProjects