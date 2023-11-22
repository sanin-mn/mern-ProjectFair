import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import primg from '../Assets/project.png'
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { BASEURL } from '../services/baseUrl';



function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            { project &&
                <Card className='shadow p-3 mb-5 btn' onClick={handleShow} >
                <Card.Img  variant="top" src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:primg}  />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                </Card.Body>
            </Card>
            }

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className='img-fluid' src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:primg} alt="pgimg" />
                        </Col>
                        <Col>
                            <h2>{project.title}</h2>
                            <p>{project.overview}</p>
                            <p>Languages used: <span className='ms-2 fw-bold'>{project.language}</span></p>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <a href={project.github}  rel="noreferrer" target='_blank' className='btn me-5'><i className="fa-brands fa-github "></i></a>

                        <a href={project.website} rel="noreferrer" target='_blank' className='btn me-5'><i className="fa-solid fa-link "></i></a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard