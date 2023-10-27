import React from 'react'

function Profile() {
    return (
        <div className='card shadow p-5'>
            <div className="d-flex justify-content-between">
                <h2>My Profile</h2>
                <button className='btn btn-outline-primary'><i className="fa-solid fa-check"></i></button>
            </div>
            <div className="row justify-content-center mt-3 text-center">
                {/* profile picture */}
                <label htmlFor="profile" className='text-center'>
                    <input id='profile' type="file" style={{ display: 'none' }} />
                    <img height={'200px'} width={'200px'} className='rounded-circle' src="https://tse2.mm.bing.net/th?id=OIP.SNo14jZX5twLF6dWBqbQNAHaHa&pid=Api&P=0&h=180" alt="pp" />
                </label>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Username' />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Github Link' />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Linkedin Profile Link' />
                </div>
            </div>
        </div>
    )
}

export default Profile