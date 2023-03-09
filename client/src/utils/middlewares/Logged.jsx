import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Logged = () => {
  const logged = useSelector(state => state.session).logged

  return logged ? <Outlet /> : <Navigate to='/' />
}

export default Logged
