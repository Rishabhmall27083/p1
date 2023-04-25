import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios"

const Updateuser = () => {
  const location =useLocation();

  const data = location.state.data

  const[user, setUser] =useState({
    id:data.id,
    password:data.password,
    name:data.name

  });
  
  const {
    id,
    password,
    name
  } =user;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id= id;

    const payload = {
     id,
     password,
     name,
    };

    const res = await axios.put(
      `http://localhost:8000/updateusers/${id}`,
      payload
    );
    const data = await res.data;

    console.log(data)
  };


  return (
<div>


<div style={{ marginLeft: '500px', marginTop: '150px', borderRadius: '55px', width: '600px',height:'-100px', backgroundColor:'rgb(45, 51, 89)' }}>
        <Form onSubmit={handleSubmit}
        style={{ width: '500px', marginLeft: '40px', marginTop:
'20px', color:'white',marginBottom:'20px' }}>
          <div style={{justifyContent: 'space-between' }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><h5>User_Id </h5></Form.Label>
                <Form.Control 
                onChange={handleChange}
                 name='id'
                 value={id}
                type="text"
                 placeholder="U1" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><h5>User_Name</h5></Form.Label>
                <Form.Control 
                 onChange={handleChange}
                name='name'
                value={name}
                type="text" 
                placeholder="User name" />
              </Form.Group>
            </div>
          </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><h5>Password</h5></Form.Label>
            <Form.Control 
             onChange={handleChange}
            name='password'
            value={password}
            type="password"
             placeholder="Password" />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent:
'space-evenly', marginTop:'30px' }}>
            <div>
            <Button variant="primary"  type="submit">
            Submit
          </Button>
            </div>
            <div>

          <Button variant="primary" type="submit" style={{ marginLeft:
'10px' }}>
            Reset
          </Button>
            </div>
          </div>


        </Form>
      </div>
</div>
  )
}

export default Updateuser;