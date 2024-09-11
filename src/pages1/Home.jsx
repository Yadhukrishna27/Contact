import React, { useState } from 'react'
import Addcontact from '../components/Addcontact'
import Contact from '../components/Contact'
import { Row, Col } from 'react-bootstrap'


function Home() {
    const [addResponse, setAddResponse] = useState("")


    return (
        <>
            <div className='container-fluid'>
                <Row>
                    <Col sm={12} md={3}>
                        <Addcontact response={setAddResponse} />

                    </Col>
                    <Col sm={12} md={9}>
                        <Contact add={addResponse} />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home