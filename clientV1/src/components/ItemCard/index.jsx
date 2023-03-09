import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function ItemCard (props) {
  return (
    <div className='Item-card'>
      <p className='Item-card--name'>{props.name}</p>
      <p className='Item-card--code'>{props.code}</p>
      <p className='Item-card--available'>{props.available}</p>
      <Link to={'/dashboard/item-show/' + props.id}><button className='ui-btn-dark'>Editar</button></Link>
    </div>
  )
}

export default ItemCard
