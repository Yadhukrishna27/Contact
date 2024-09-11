import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import ContactList from './ContactList'
import axios from 'axios'
function Contact() {

    const [contacts,setContacts]=useState([])
    const [res,setres]=useState('')

 useEffect(() => {
    axios.get("http://localhost:3000/contacts")
    .then(response => {
        setContacts(response.data);
        
    })

 
  
 }, [res]) 
 


  return (
    <>
        <div className="border border-3 shadow p-5 mb-3">
                {
                    contacts.length>0 ?
                
                <Row>
                    {
                        contacts.map(item=>(
                            <Col>
                        <ContactList cardData={item} response={setres}/>
                        </Col>
                        ))
                    }
                    
                </Row>
                :
                <h2 className='text-center text-danger'>No Videos Available</h2>
                }


            </div>
    </>
  )
}

export default Contact