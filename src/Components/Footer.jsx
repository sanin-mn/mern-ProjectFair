import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-around' style={{ width: '100%', height: '400px', backgroundColor: '#4F4F4F' }}>
            <div className="footer d-flex justify-content-evenly w-100">
                <div className="wesite">
                    <h4 style={{color: 'black'}}>
                    <i className="fa-brands fa-stack-overflow" ></i>{' '}
                        Project Fair
                    </h4>
                    <p style={{ color: '#6F6F6F' }}>Lorem ipsum dolor sit ametb <br /> consectetur adipisicing elit. <br /> Odio consectetur tempora maiores dolore.</p>
                </div>
                <div className="links d-flex flex-column">
                    <h4 className='text-dark'>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to={'/projects'} style={{ textDecoration: 'none', color: 'white' }}>Projects</Link>
                    <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h4 className='text-dark'>Guides</h4>
                    <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}>React</a>
                    <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'white' }}>Bootstrap</a>
                    <a href="https://nodejs.org/en" style={{ textDecoration: 'none', color: 'white' }}>Node</a>
                </div>
            </div>
            <p style={{ color: 'black' }} className='text-end'>copy ® 2023 Projectfair .Built with React.</p>
        </div>
  )
}

export default Footer