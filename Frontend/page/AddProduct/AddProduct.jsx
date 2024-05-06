import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
    const [formData,setformData]=useState({});
    const [loading,setLoading]=useState(false);

    const {id}=useParams();
    const navigate=useNavigate();
    const handleSubmit=async()=>{
        try {
            const response=await axios.post(`/api/product`,formData)
            navigate('/product')
        } catch (error) {
            console.log(error.response.data.message);
        }

    }
    const HandleChange=(e)=>{
        setformData({
          ...formData,
          [e.target.name]:e.target.value
    
        })
      }
      console.log(formData)
  return (
    <div className='signup-main'>
    <div className="signup-heading">
      <p>Add Product</p>
    </div>
    <div className='signup-second'>
      <form className='signup-form' onSubmit={handleSubmit}>
       
        <input type="text" value={formData.name} placeholder='enter Product name' name='name' onChange={HandleChange} />
        <input type='text'  value ={formData.company_name} placeholder='enter company name' name='company_name' onChange={HandleChange}/>
        <textarea name="description" value ={formData.description} placeholder='write your product description' rows="4" cols="50"  onChange={HandleChange} />
        <input type="number" value ={formData.price} placeholder='enter price' name='price'  onChange={HandleChange} />
        <button type='submit' disabled={loading}>{loading?"loading":"Update"}</button>
      
      </form>
    </div>
    


  </div>
  )
}

export default AddProduct