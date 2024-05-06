import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { Context } from '../../Context'

const Signin = () => {
  const [formData, setformData] = useState({})
  const [error,setError]=useState()
  const [loading,setloading]=useState(false);
  const {user,setUser}=useContext(Context);
  const navigate=useNavigate();
  const HandleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value

    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post('/api/signin',formData);
      setloading(true)
      setUser(response.data)
      navigate('/product')
    } catch (error) {
      setloading(false)
      setError(error.response.data.message)
    }
  }
  return (
    <div className='signup-main'>
    <div className="signup-heading">
      <p>Login</p>
    </div>
    <div className='signup-second'>
      <form className='signup-form' onSubmit={handleSubmit}>
       
        <input type="email" placeholder='username' name='username' onChange={HandleChange} />
        <input type='password' placeholder='password' name='password' onChange={HandleChange}/>
        <button type='submit' disabled={loading}>{loading?"loading":"Sign In"}</button>
      
      </form>
      {error && <p className='signup-error'>{error}</p>}
      <p>Don't have an account? <span><Link to={"/signup"}>Sign up</Link></span></p>
    </div>
    


  </div>
  )
}

export default Signin