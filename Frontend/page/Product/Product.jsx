import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import Card from '../../component/Card/Card'
import { Context } from '../../Context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Product = () => {
 const {user}=useContext(Context);
 const [data,setData]=useState([]);
 useEffect(()=>{
  const getData=async()=>{

  
  try {
    const response=await axios.get('/api/products');
    setData(response.data);
  } catch (error) {
    console.log(error.response.data.message)
  }
}
getData();

 },[])
 const navigate=useNavigate();
 const {setUser}=useContext(Context);
 const handleLogout=async()=>{
try {
  const response=await axios.get('/api/logout');
  setUser(null);
  navigate('/');
} catch (error) {
  console.error(error);
}
 }

  return (
    <div className='product-main'>
       <div className="product-header">
        <p>Product</p>
        <div style={{display:'flex',alignItems:'center',gap:'1vw'}}>
        <p>{user.role} is logined</p>
        <p style={{fontSize:'1.2vw',cursor:'pointer'}} onClick={()=>{navigate('/addadmin')}}>Add Admin</p>
        <p id='logout' onClick={handleLogout}>logout</p>
        </div>
       </div>
       <div className="product-list">
        {data && data.length>0 &&
        data.map((dt)=>(
          <Card data={dt}/>
        )) 
        
        }
        
       </div>
    </div>
  )
}

export default Product