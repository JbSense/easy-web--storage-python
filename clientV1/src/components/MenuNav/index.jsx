import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrowIcon from '../../assets/icons/arrow-light-2.svg'
import { authLogout } from '../../utils/auth/authLogout'
import './index.css'

function MenuNav () {
  const logged = JSON.parse(localStorage.getItem('login')).logged
  const navigate = useNavigate()

  const handleLogout = () => {
    authLogout()
    return navigate('/login')
  }

  let down = false

  const downBar = () => {
    if (!down) document.querySelector('.Menu-nav').classList.add('Menu-nav-down')
    if (down) document.querySelector('.Menu-nav').classList.remove('Menu-nav-down')
    down = !down
  }

  return (
    <div className='Menu-nav'>
      <div className='Menu-nav-head'>
        <p className='Menu-nav--title'>Menu</p>
        <img src={arrowIcon} alt='Arrow icon' className='Menu-nav--icon' />
      </div>

      <div className='Menu-nav-content'>
        <ul className='Menu-nav--list'>
          <li className='Menu-nav--item'><Link to='#'>Conta</Link></li>
          <li className='Menu-nav--item'><Link to='item-create'>Adicionar</Link></li>
        </ul>

        <p className='Menu-nav--logout' onClick={handleLogout}>Sair</p>
      </div>
    </div>
  )
}

export default MenuNav
