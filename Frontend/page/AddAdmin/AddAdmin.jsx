import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
const navigate=useNavigate();
  const HandleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value

    })
  }
  const handleSubmit=async()=>{
  try {
    const response=await axios.post('/api/admin',{...formData,role:"admin"})
    console.log(response.data);
    navigate('/product')
  } catch (error) {
    console.log(error.message)
  }
}
  return (
<div className='signup-main'>
    <div className="signup-heading">
      <p>Add Admin</p>
    </div>
    <div className='signup-second'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='enter your name' onChange={HandleChange} />
        <input type="text" placeholder='username' name='username' onChange={HandleChange} />
        <input type='password' placeholder='password' name='password' onChange={HandleChange}/>
        <button type='submit' disabled={loading}>{loading?"loading":"Sign In"}</button>
      
      </form>
      {error && <p className='signup-error'>{error}</p>}
      <p>Don't have an account? <span><Link to={"/signup"}>Sign up</Link></span></p>
    </div>
    


  </div>  
)
}

export default AddAdmin