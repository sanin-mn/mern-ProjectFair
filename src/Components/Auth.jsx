import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>

            <div className='container w-75'>
                <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center'><h5><i class="fa-solid fa-arrow-left"></i> Back to home</h5></Link>

                <div className="card shadow p-5 bg-success">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" className='rounded-start w-100' alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <div className="d-flex mt-2 text-light">
                                <i className="fa-brands fa-stack-overflow fa-3x me-1"></i><span className='h1 fw-bolder mb-0'>Project Fair</span>
                                </div>
                                <h5 className='fw-normal mt-4 pb-3 text-light'>

                                {
                                    registerForm ? 'sign up to your account' : 'sign in to your account'
                                }
                                </h5>
                                    <Form className='text-light w-75'>
                                    { registerForm && <Form.Group className="mb-3" controlId="formBasicUsername">
                                       <Form.Control type="text" placeholder="Enter Your Name" />
                                    </Form.Group>}

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                       <Form.Control type="email" placeholder="Enter Your E-mail" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                       <Form.Control type="password" placeholder="Enter Your Password" />
                                    </Form.Group>

                                    {
                                        registerForm ?
                                        <div>
                                            <Button variant='light' type='submit' size='lg'>Register</Button>
                                            <p className='mt-3'>Already have an account ? <Link to={'/login'}>Login Here</Link></p>
                                        </div> :
                                        <div>
                                        <Button variant='light' type='submit' size='lg'>Login</Button>
                                        <p className='mt-3'>New user ? <Link to={'/register'}>Register Here</Link></p>
                                        </div>
                                    }
                                    </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth