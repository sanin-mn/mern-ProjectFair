import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

function AddProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <label htmlFor="profile" className='text-center'>
                                <input id='profile' type="file" style={{ display: 'none' }} />
                                <img height={'200px'} width={'200px'} className='rounded-circle' src="https://tse2.mm.bing.net/th?id=OIP.SNo14jZX5twLF6dWBqbQNAHaHa&pid=Api&P=0&h=180" alt="pp" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className='form-control' placeholder='Project name' />
                            <input type="text" className='form-control' placeholder='Language used' />
                            <input type="text" className='form-control' placeholder='Github Link' />
                            <input type="text" className='form-control' placeholder='Website Link' />

                        </div>
                        <input type="text" className='form-control' placeholder='Overview' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProjects