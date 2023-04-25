import React,{useState} from 'react'
import './Category.css'
const AddCategory = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () =>{
    return(
      <>
      <div className='modalWrapper'></div>
      <div className='modalBox'>
        <h2 style={{textAlign:'center',marginTop:'10px'}}>Add New Category</h2>
        <form>
          <label>Category Id</label>
          <br/>         
          <input/>
          <br/>
          <label>Category Name</label>
          <br/>
          <input/>
          
          <br/>
          <button className='modalButton' style={{background:'green'}} onClick={()=>setShowModal(false)}>Save</button>
        <button className='modalButton' style={{background:'red'}} onClick={()=>setShowModal(false)}>Cancel</button>
        </form>
        
      </div>
      </>
    )
  }

  return (
    <div>
      <button className='modalButton' style={{marginLeft:'20px',marginBottom:'10px'}} onClick={()=> setShowModal(true)}>Add New</button>
      {showModal && <MyModal/>}
    </div>
  )
}

export default AddCategory
