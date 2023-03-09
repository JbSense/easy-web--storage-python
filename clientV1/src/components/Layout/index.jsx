import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import './index.css'

function Layout () {
  return (
    <div className='Layout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
