import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Landing() {
    return (
        <>
            <div className="container-fluid mb-5 d-flex align-items-center" style={{ height: '80vh' }}>
                <Row>
                    <Col className='p-5' sm={12} md={6}>
                        <h2> Contact Management</h2>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, obcaecati, cupiditate non ratione vitae rerum totam architecto placeat eaque laudantium accusantium eos quos ullam voluptatum officia! Eligendi ducimus vitae iste.</p>
                        <Link to={'/home'} className='btn btn-info'>Connect</Link>
                    </Col>
                    <Col className='py-4' sm={12} md={6}>
                        <img src="https://website-assets-fw.freshworks.com/attachments/cjuwek45n01w4ztg0bh9cvq4q-contact-management-software.one-half.png" className='img-fluid' alt="introimg" />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Landing