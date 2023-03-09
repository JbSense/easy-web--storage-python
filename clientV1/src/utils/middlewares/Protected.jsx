import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
  const logged = JSON.parse(localStorage.getItem('login')).logged

  return logged ? <Outlet /> : <Navigate to='/login' />
}

export default Protected
