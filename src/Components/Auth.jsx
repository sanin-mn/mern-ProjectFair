import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI,loginAPI } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
    const registerForm = register ? true : false

    const [userData, setUserData] = useState({
        username: "", email: "", password: ""
    })

    const navigate = useNavigate()

    // console.log(userData);
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            toast.info("Please fill th form completely")
        } else {
            // api call
            const res = await registerAPI(userData)
            console.log(res);
            if (res.status === 200) {
                toast.success(`user ${res.data.username} has successfully registered`);
                // reset state
                setUserData({
                    username: "", email: "", password: ""
                })
                // navigate
                navigate('/login')
            } else {
                toast.warning(res.response.data)
            }
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const {email, password } = userData
        if (!email || !password) {
            toast.info("Please fill th form completely")
        } else {
            // api call
            const res = await loginAPI({email,password})
            console.log(res);
            if (res.status === 200) {
                // sav res
                localStorage.setItem("existingUser",JSON.stringify(res.data.existingUser))
                localStorage.setItem("role",res.data.role)
                sessionStorage.setItem("token",res.data.token)
                // reset state
                setUserData({
                    email:"",password:""
                })
                // navigate
                navigate('/')
            } else {
                toast.warning(res.response.data)
            }
        }
    }


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
                                    {registerForm && <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Control type="text" placeholder="Enter Your Name" value={userData.username} onChange={e => setUserData
                                            ({ ...userData, username: e.target.value })} />
                                    </Form.Group>}

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter Your E-mail" value={userData.email} onChange={e => setUserData
                                            ({ ...userData, email: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Enter Your Password" value={userData.password} onChange={e => setUserData
                                            ({ ...userData, password: e.target.value })} />
                                    </Form.Group>

                                    {
                                        registerForm ?
                                            <div>
                                                <Button onClick={handleRegister} variant='light' type='submit' size='lg'>Register</Button>
                                                <p className='mt-3'>Already have an account ? <Link to={'/login'}>Login Here</Link></p>
                                            </div> :
                                            <div>
                                                <Button onClick={handleLogin} variant='light' type='submit' size='lg'>Login</Button>
                                                <p className='mt-3'>New user ? <Link to={'/register'}>Register Here</Link></p>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <ToastContainer />
        </div>
    )
}

export default Auth