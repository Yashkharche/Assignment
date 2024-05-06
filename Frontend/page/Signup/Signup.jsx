import React, { useState } from 'react'
import './signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
const [formData, setformData] = useState({});
  const [loading,setloading]=useState();
  const [error,seterror]=useState("");
  const HandleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    });
   
  }
  const navigate=useNavigate();
  const HandleSubmit=async(e)=>{

e.preventDefault();
  try {
    const response=await axios.post('/api/signup',formData);
    setloading(true);    
   
    {console.log(response)}
    navigate('/')
  } catch (error) {
    setloading(false);
    seterror(error.response.data.message);
  }
  }
  return (
    <div className='signup-main'>
    <div className="signup-heading">
      <p>Sign Up</p>
    </div>
    <div className='signup-second'>
      <form className='signup-form' onSubmit={HandleSubmit}>
        <input type="text" placeholder='enter your name' name='name' onChange={HandleChange} />
        <input type="email" placeholder='enter your username' name='username' onChange={HandleChange}/>
        <input type='password' placeholder='enter your password' name='password' onChange={HandleChange}/>
        <button type='submit' disabled={loading}>{loading?"loading...":"Sign up"}</button>
      </form>
      <p><Link to={'/signin'}>Already have an account?</Link></p>
    </div>
    {error && <p className='signup-error'>{error}</p>}


  </div>
  )
}

export default Signup