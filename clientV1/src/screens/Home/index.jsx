import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Items from '../../components/Items'
import { authLogout } from '../../utils/auth/authLogout'
import './index.css'

function Home () {
  return (
    <div className='Home'>
      <Link to='item-create' className='ui-btn-dark'>Adicionar ao estoque</Link>
    </div>
  )
}

export default Home
