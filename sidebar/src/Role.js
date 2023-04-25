import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Swal from 'sweetalert2'
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Role() {


  const navigate = useNavigate();

  const postData = () => {
    navigate("../LoginRole");
  }



  const [show, setShow] = useState(false);

  const [role_id, setNewRoleid] = useState("")

  const [roll_name, setNewRollname] = useState("")



  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);


  async function updateData(role_id, roll_name) {


    console.log(role_id, roll_name)

    setNewRoleid(role_id);

    setNewRolename(roll_name);


    handleShow()

  }


  async function saveUpdatedData() {

    let response = await axios.put(`http://localhost:8000/updaterole/${role_id}`, {
      "role_id": value.role_id,
      "roll_name": value.roll_name
    })
      .then(() => {
        fetchData()
      })

    await console.log(response)

  }
  const [data, setdata] = useState([])

  const fetchData = async () => {

    const apidata = await axios.get('http://localhost:8000/getrole')
    return setdata(apidata.data)

  }

  function handleDelete(role_id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    axios.delete(`http://localhost:8000/deleteRole/${role_id}`)
      .then(() => {
        fetchData();
      });
  }




  useEffect(() => { fetchData() }, [])
  console.log("data", data)





  return (
    <div>
      {/* <Button onClick={() => postData()}>
        Add role
    </Button> */}
      <Table striped bordered hover variant="black" style={{ marginLeft: '100px', marginTop: '10px', width: '1200px', height: '500px', backgroundColor: 'cadetblue', }}>
        <thead>
          <tr style={{ backgroundColor: 'black', color: 'whitesmoke' }}>

            <th>Role Id</th>
            <th>Role Name</th>
            <th>Operation</th>
            <th>Operation</th>


          </tr>
        </thead>
        <tbody>


          {
            data.map((value) => {
              return (
                <tr>
                  <td>{value.role_id}</td>
                  <td>{value.roll_name}</td>

                  <td>

                    <button className='btn btn-success' onClick={() => updateData(value.role_id, value.roll_name)}>Update</button>

                  </td>

                  <td> <Button variant="danger" style={{ backgroundColor: 'black' }} onClick={() => { handleDelete(value.role_id) }}>Delete</Button></td>



                </tr>
              )
            })
          }
        </tbody>
      </Table>
      {/*                              */}
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>

          <Modal.Title>Update Role Name</Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <div>

            <Form.Label>Role Id</Form.Label>

            <Form.Control value={role_id} onChange={(e) => setNewRoleid(e.target.value)} disabled='true' /> <br />

            <Form.Label>Role Name</Form.Label>

            <Form.Control value={roll_name} onChange={(e) => setNewRollname(e.target.value)} /> <br />


          </div>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>

            Close

          </Button>

          <Button variant="primary" onClick={(e) => saveUpdatedData(e)}>


            Save

          </Button>

        </Modal.Footer>

      </Modal>
      

    </div>

  )
}

export default Role