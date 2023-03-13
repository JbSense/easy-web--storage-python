import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import arrowIcon from '../../../assets/icons/arrow-light.svg'
import { setLogout } from '../../../redux/slices/sessionSlice'
import { logout } from '../../../utils/auth/logout'
import './index.css'

function MenuNav () {
  const dispatch = useDispatch()
  let openMenu = false
  const navigate = useNavigate()

  const handleOpenMenu = () => {
    if (!openMenu) document.querySelector('.Menu-nav').classList.add('Menu-nav--open')
    if (openMenu) document.querySelector('.Menu-nav').classList.remove('Menu-nav--open')
    openMenu = !openMenu
  }

  const handleLogout = () => {
    logout()
    dispatch(setLogout())
    return navigate('/login')
  }

  return (
    <div className='Menu-nav'>
      <div className='Menu-nav__head' onClick={handleOpenMenu}>
        <p className='Menu-nav__menu-title'>Menu</p>
        <img src={arrowIcon} alt='Flecha' className='Menu-nav__down-arrow' />
      </div>

      <nav className='Menu-nav__nav'>
        <Link to='#' className='Menu-nav__item'>Account</Link>
        <Link to='#' className='Menu-nav__item'>Create</Link>
        <Link to='#' className='Menu-nav__item'>List</Link>
        <button className='ui-btn-primary-red Menu-nav__logout' onClick={handleLogout}>Sair</button>
      </nav>
    </div>
  )
}

export default MenuNav
