import React, { useEffect, useState } from 'react'
import CardItem from '../../../components/Cards/Item'
import searchIcon from '../../../assets/icons/search-light.svg'
import api from '../../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { setItems, updateItems } from '../../../redux/slices/itemsSlice'

function List () {
  const itemsStore = useSelector(state => state.items)
  const user = useSelector(state => state.session.user)
  const [items, setItemsState] = useState([])

  useEffect(() => {
    api({
      route: 'storageGetAllSimple',
      params: user
    }).then(response => {
      setItemsState(response)
    })
  }, [itemsStore])

  return (
    <div className='Item-list'>
      <div className='Item-list__search'>
        <img src={searchIcon} alt='Search icon' className='Item-list__search-icon' />
        <input type='text' name='search' placeholder='Buscar no estoque...' className='Item-list__field' />
      </div>

      <div className='Item-list__items'>
        {
          typeof items !== 'undefined' && items.map(item => {
            return (
              <CardItem
                key={item.items_id}
                id={item.items_id}
                name={item.items_name}
                code={item.items_code}
                available={item.available}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default List
