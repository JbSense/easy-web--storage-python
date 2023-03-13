import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import MenuNav from './MenuNav'

function Layout () {
  return (
    <div className='Layout'>
      <header className='Layout__header'>
        <div className='Layout__logo'></div>
        <MenuNav />
      </header>

      <main className='Layout__content'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
