import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'


 function Dashboard() {
  return (
    <>
      {/* header */}  
          <Header insideDashboard={true}/> 

      {/* body */}
    <Row style={{marginTop:'100px'}} className='container-fluid'>

      <Col sm={12} md={8} className='mt-5'>
        <h1>Welcome <span className='text-warning'>User</span></h1>
        {/* myproject section */}
        <Myprojects/>

      </Col>

      <Col sm={12} md={4} className='mt-5'>
        {/* profile section */}
        <Profile/>
      </Col>

    </Row>
      
    </>
  )
}

export default Dashboard