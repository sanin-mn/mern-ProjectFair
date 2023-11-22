import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { BASEURL } from '../services/baseUrl';

function EditProject({displayData}) {
    // console.log(displayData);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <button onClick={handleShow} className='btn me-2'><i class="fa-solid fa-edit"></i></button>
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
                                <input id='profileimg' type="file" style={{ display: 'none' }} />
                                <img height={'200px'}  src={`${BASEURL}/uploads/${displayData.projectImage}`} alt="pp" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  className='form-control' placeholder='Project name' value={displayData.title}/>
                            <input type="text" className='form-control' placeholder='Language used' value={displayData.language} />
                            <input type="text" className='form-control' placeholder='Github Link' value={displayData.github}/>
                            <input type="text" className='form-control' placeholder='Website Link' value={displayData.website}/>
                        </div>
                        <input type="text" className='form-control' placeholder='Overview' value={displayData.overview}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" >Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditProject