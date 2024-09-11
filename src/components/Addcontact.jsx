import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Addcontact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cardData, setCardData] = useState({
    imgurl: '',
    name: '',
    phoneNo: '',
    email: '',
  });

  const uploadData=()=>{
    axios.post("http://localhost:3000/contacts",cardData)
    .then(res => {
      console.log(res);
      setShow(false);
    }
    )
    .catch(err=>{
      console.log(err)

    })
      
  }


  return (
    <>
    <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-circle-plus" style={{ color: "#FFD43B", }} />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FloatingLabel controlId="imgurl" label="Image url" className="mb-3">
                        <Form.Control type="text" placeholder="url" onChange={(e)=>{
                          setCardData({...cardData, imgurl: e.target.value });
                        }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingId" label="Name" className="mb-3">
                        <Form.Control type="text" placeholder="1" onChange={(e)=>{
                          setCardData({...cardData, name: e.target.value });
                        }} />

                    </FloatingLabel>
                    <FloatingLabel controlId="vtitle" label="Phone No" className="mb-3">
                        <Form.Control type="number" placeholder="title" onChange={(e)=>{
                          setCardData({...cardData, phoneNo: e.target.value });
                        }} />

                    </FloatingLabel>
                    <FloatingLabel controlId="imgurl" label="Email" className="mb-3">
                        <Form.Control type="email" placeholder="url" onChange={(e)=>{
                          setCardData({...cardData, email: e.target.value });
                        }}/>
                    </FloatingLabel>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={e=>uploadData()} >add</Button>
                </Modal.Footer>
            </Modal>
        
    </>
  )
}

export default Addcontact