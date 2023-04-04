import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const auth = localStorage.getItem('user_token')
  return auth ? <Navigate to='/books' /> : children
}

export default ProtectedRoutes
