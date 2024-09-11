import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import axios from 'axios';
function ContactList({ cardData, response }) {


    const DelCard = () => {
        axios.delete(`http://localhost:3000/contacts/${cardData.id}`)
            .then(res => {
                response(res)
            })
    }
    return (
        <>
            <Card style={{ width: '18rem' }} >

                <Card.Body>
                    <Container><img src={cardData.imgurl} /></Container>
                    <Card.Title>{cardData.name}</Card.Title>
                    <Card.Text>
                        <h6 className='text-dark'>{cardData.phoneNo}/</h6>
                        <h6 className='text-dark'>{cardData.email}/</h6>
                    </Card.Text>
                    <Button variant="btn btn-danger" id={cardData.id} onClick={e => { DelCard() }}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default ContactList