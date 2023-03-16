import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import iconTrash from '../../../assets/icons/trash.svg'
import { setItems, updateItems } from '../../../redux/slices/itemsSlice'
import api from '../../../utils/api'
import './index.css'

function CardItem (props) {
  const dispatch = useDispatch()

  const deleteItem = (id) => {
    api({
      route: 'storageDelete',
      params: id
    }).then(response => {
      api({
        route: 'storageGetAllSimple',
        params: JSON.parse(sessionStorage.getItem('session')).user
      }).then(response => {
        dispatch(setItems(response))
      })
    })
  }

  return (
    <div className='Card-item'>
      <div className='Card-item__infos'>
        <p className='Card-item__name'>{props.name}</p>
        <p className='Card-item__code'>{props.code}</p>
      </div>

      <p className='Card-item__available'>{props.available}</p>

      <Link to={'/dashboard/item-update/' + props.id} className='Card-item__edit'><button className='ui-btn-primary-blue'>Editar</button></Link>

      <button className='Card-item__delete' onClick={() => deleteItem(props.id)}><img src={iconTrash} alt='Trash icon' /></button>
    </div>
  )
}

export default CardItem
