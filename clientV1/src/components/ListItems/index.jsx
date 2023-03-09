import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../utils/api'
import ItemCard from '../ItemCard'
import './index.css'

function ListItems () {
  const [items, setItems] = useState()
  const itemsUpdate = useSelector(state => state.items).payload

  useEffect(() => {
    setItems(itemsUpdate)
  }, [useSelector(state => state.items)])

  return (
    <div className='List-items'>
      {
        typeof items !== 'undefined' && items.map(item => {
          return (
            <ItemCard
              id={item.items_id}
              name={item.items_name}
              code={item.items_code}
              available={item.available}
            />
          )
        })
      }
    </div>
  )
}

export default ListItems
