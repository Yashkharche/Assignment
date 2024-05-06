import React, { useContext } from 'react'
import './Card.css'
import { Context } from '../../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Card = ({data}) => {
  const {user}=useContext(Context)
  const navigate=useNavigate();
  const handleDelete=async({id})=>{
    try {
      const response=await axios.delete(`/api/delete/${id}`);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='card-main'>
        <div className="card-heading">
        <p>{data.name}</p>
        <p>{data.company_name}</p>
        </div>
        <p id='desc'>{data.description}</p>
        <p id='price'>Rs.{data.price}</p>
        {user.role==='admin' &&(
        <div className='button'>
          <button type='button' onClick={()=>{navigate(`/product/update/${data._id}`)}}>Update</button>
          <button type='button' onClick={()=>{handleDelete(data._id)}}>Delete</button>
        </div>
        )
}
    </div>
  )
}

export default Card