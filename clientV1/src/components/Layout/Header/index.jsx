import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import MenuNav from '../../MenuNav'

function Header () {
  const [logged, setLogged] = useState()
  const login = useSelector(state => state.login.logged)
  const renderMenuNav = () => {
    if (logged) return <MenuNav />
  }

  useEffect(() => {
    setLogged(login)
  }, [login])

  return (
    <div className='Header'>
      <div className='Header-logo'></div>
      {renderMenuNav()}
    </div>
  )
}

export default Header
