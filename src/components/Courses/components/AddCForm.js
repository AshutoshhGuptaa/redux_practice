import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {CreateCourse} from '../actions/index'

function AddCForm() {
    const [formData, setformData]=useState({});
    const dispatch=useDispatch();
    const Submit=(e)=>{
        e.preventDefault();
        console.log('form data:', formData)
      CreateCourse(formData);
    }
  return (<div>
      <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="text" placeholder="Enter couse name" onChange={e=>setformData({...formData, name:e.target.value})} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="" placeholder="price" onChange={e=>setformData({...formData, price:e.target.value})}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={(e)=> Submit(e)}>
    Submit
  </Button>
</Form>
  </div>
  )}

export default AddCForm;
