import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const NotProtected = () => {
  const logged = JSON.parse(localStorage.getItem('login')).logged

  return !logged ? <Outlet /> : <Navigate to='/dashboard/item-list' />
}

export default NotProtected
