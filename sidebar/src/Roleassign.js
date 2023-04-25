import React from 'react'

const Roleassign = () => {
  return (
    <div>
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

                    <button className='btn btn-success'>Update</button>

                  </td>

                  <td> <Button variant="danger">Delete</Button></td>



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

export default Roleassign
