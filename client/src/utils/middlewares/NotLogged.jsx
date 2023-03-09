import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const NotLogged = () => {
  const logged = useSelector(state => state.session).logged

  return !logged ? <Outlet /> : <Navigate to='/' />
}

export default NotLogged
