import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const user = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  // const [Role_name,setRole_name] =useState("");
  const [password, setPassword] = useState("");
  

  function saveUser() {
    let data = { id, name, password }
    fetch("http://localhost:8000/postusers", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log("result", result);
      result.json().then((resp) => {
        console.log("resp", resp)
      })
    })

  }



  return (
    <>
      <div style={{ marginLeft: '400px', marginTop: '100px', borderRadius: '50px', width: '600px', height: '500px', backgroundColor: 'rgb(45, 51, 89)', }}>
        <Form style={{
          width: '500px', marginLeft: '40px', marginTop:
            '20px', color: 'white', marginBottom: '20px'
        }}>
          <div style={{ justifyContent: 'space-between' }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Id</Form.Label>
                <Form.Control type="text"
                  value={id}
                  onChange={(e) => { setId(e.target.value) }}
                  placeholder="U1" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder="User name" />
              </Form.Group>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder="Password" />
          </Form.Group>
          
          

          <div style={{
            display: 'flex', justifyContent:
              'space-evenly', marginTop: '30px'
          }}>
            <div>
              <Button variant="primary"
                type="submit"
                onClick={saveUser}
              >
                Submit
              </Button>
            </div>
            <div>

              <Button variant="primary" type="submit" style={{
                marginLeft:
                  '10px'
              }}>
                Reset
              </Button>
            </div>
          </div>


        </Form>
      </div>
    </>
  )
}

export default user;
