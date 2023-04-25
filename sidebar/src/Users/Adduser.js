import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import axios  from  "axios";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';



function Adduser() {
  const navigate=useNavigate();
  const [data, setdata]= useState ([])
  const fetchData = async () => {
    const apidata = await axios.get('http://localhost:8000/getusers')
    return setdata(apidata.data)
 }
  useEffect(()=>{fetchData()}, [] )
 console.log("data", data)
 
 function handleDelete(id){
  axios.delete(`http://localhost:8000/deleteusers/${id}`)
  .then(()=>{
    fetchData ();
  })
  }
  return (
    <div  style={{marginLeft:100,width:'1200px'}}>
    <Table striped bordered hover variant="dark" style={{marginTop:'50px'}}>
      <thead>
        <tr>
          
          <th>User_id</th>
          {/* <th>password</th> */}
          <th>User_name</th>
          {/* {<th>Role_name</th> } */}
          <th>Status</th>
          <th>createdon</th>
          <th>Role</th>
          <th>Operation</th>
          
        </tr>
      </thead>
      <tbody>
    

       {
        data.map((item)=>{
          return(
           <tr>
             <td>{item.id}</td>
            {/* <td>{item.password}</td> */}
            <td>{item.name}</td>

            
            {/* {<td>{item.Role_name}</td> } */}

            <td><td><Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="" textAlign="center"
      /></td> 


</td>
            
            <td>{item.createdon}</td>
            {/* <td> <Button variant="outline-dark" style={{backgroundColor:'whitesmoke'}} onClick={()=>navigate("/updateuser",{state:{data:item},})}>Update</Button></td> */}
            <td><Button variant="dark">Role assign</Button><Button variant="dark">View</Button></td>
            <td> <Button variant="outline-dark" style={{backgroundColor:'cadetblue'}} onClick={()=> { if(window.confirm('ARE YOU SURE TO DELETE DATA')) {handleDelete(item.id)}}}>Delete</Button></td>
            
              
            
           </tr>
          )
        })
       }
      </tbody>
    </Table>
    </div>
    
    
  )
      }
    

export default Adduser;