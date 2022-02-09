import React from 'react';
import {Table, Button} from 'react-bootstrap'
import {useEffect} from 'react'
import {useDispatch,  useSelector} from 'react-redux'
import { GetCourses } from '../actions';
function ShowCourses() {
    const data = useSelector(state=>state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetCourses())
    },[])
  return <div>
    
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>S. no</th>
      <th>COURSE NAME</th>
      <th>PRICE</th>
      <th>ADD TO CART</th>
    </tr>
  </thead>
  <tbody>
   {data && data.map((course)=>(
       <tr>
           <td>{course.id}</td>
           <td>{course.name}</td>
           <td>{course.price}</td>
           <td> <Button variant="primary">Add to Cart</Button></td>
       </tr>
   ))}
  </tbody>
</Table>
  </div>;
}

export default ShowCourses;
