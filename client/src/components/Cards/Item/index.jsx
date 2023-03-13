import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function CardItem (props) {
  return (
    <div className='Card-item'>
      <div className='Card-item__infos'>
        <p className='Card-item__name'>{props.name}</p>
        <p className='Card-item__code'>{props.code}</p>
      </div>
      <p className='Card-item__available'>{props.available}</p>
      <Link to={'/dashboard/item-show/' + props.id} className='Card-item__edit'><button className='ui-btn-primary-blue'>Editar</button></Link>
    </div>
  )
}

export default CardItem
