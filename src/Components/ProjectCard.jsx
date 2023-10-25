import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import primg from '../Assets/project.png'
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';



function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className='shadow p-3 mb-5 btn' onClick={handleShow}>
                <Card.Img variant="top" src={primg} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img className='img-fluid' src={primg} alt="pgimg" />
                        </Col>
                        <Col>
                            <h2>Project Title</h2>
                            <p>Project Overview</p>
                            <p>Languages used: <span className='ms-2 fw-bold'>HTML,CSS,JS,React</span></p>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <a href="https://github.com/sanin-mn/travel" rel="noreferrer" target='_blank' className='btn me-5'><i className="fa-brands fa-github "></i></a>

                        <a href="https://github.com/sanin-mn/travel" rel="noreferrer" target='_blank' className='btn me-5'><i className="fa-solid fa-link "></i></a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard