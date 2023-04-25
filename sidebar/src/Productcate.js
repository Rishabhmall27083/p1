import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./Category.css"
import AddCategory from './AddCategory'

const Productcategory=()=>
{
const[empData, setEmpData] =useState([])

  async function getData()
 {
    let response = await axios.get('http://localhost:8000/getProductcate')
    
    console.log(response.data)
    setEmpData(response.data)
 }
 
 //for update role
 const [updateUser, setUpdateUser] = useState(false);

 const Update = () =>{
  return(
    <>
    <div className='updateWrapper'></div>
    <div className='updateBox' style={{marginLeft:'-500px'}}>
      <h2 style={{textAlign:'center',marginTop:'10px'}}>Update Category</h2>
      <form>
          <label>Category Id</label>
          <br/>         
          <input/>
          <br/>
          <label>Category Name</label>
          <br/>
          <input/>
          
          <br/>
          <button className='modalButton' style={{background:'green'}} onClick={()=>setUpdateUser(false)}>Update</button>
        <button className='modalButton' style={{background:'red'}} onClick={()=>setUpdateUser(false)}>Cancel</button>
        </form>
      
    </div>
    </>
  )
}

 useEffect(()=>{
   getData()
 },[])
 
  return (
    <div className='userBox'>
      <h1 style={{textAlign:'center', paddingTop:'10px'}}>CATEGORY</h1>
      <AddCategory/>
        
      <table style={{border: '2px solid black',textAlign:'center'}} className="center">
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th>Added On</th>
            <th>Action</th>
            
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>C1</td>
            <td>Electronics</td>
            <td>27-8-22</td>
            <td>Active</td>
  
            <button className='updateButton' onClick={()=>setUpdateUser(true)}>Update</button>
            {updateUser && <Update/>}
            <button className='deleteButton'>Delete</button>
          </tr>
          
        {
    empData.map((item,index) =>
    { 
        return(
            <tr key={index}>
        <td>{item.eid}</td>
        <td>{item.ename}</td>
        <td>{item.dept}</td>
        <td>{item.salary}</td>
        <button className='updateButton'>Update</button>
          <button className='deleteButton'>Delete</button>
        {
            (item.salary>=50000)?
            <td style={{color:"green"}}>Average</td>:<td style={{color:'red'}}>Low Balance</td>
        }
    
       </tr>
        )
    })
}

        </tbody>
      </table>
    </div>
  )
}

export default Productcategory
