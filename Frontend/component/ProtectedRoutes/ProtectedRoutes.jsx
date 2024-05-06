import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const {user}=useContext(Context);
  return (user?<Outlet/>:<Navigate to='/'/>)
}

export default ProtectedRoutes