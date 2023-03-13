import React from 'react'
import CardItem from '../../../components/Cards/Item'
import searchIcon from '../../../assets/icons/search-light.svg'
import './index.css'

function List () {
  return (
    <div className='Item-list'>
      <div className='Item-list__search'>
        <img src={searchIcon} alt='Search icon' className='Item-list__search-icon' />
        <input type='text' name='search' placeholder='Buscar no estoque...' className='Item-list__field' />
      </div>

      <div className='Item-list__items'>
        <CardItem
          id={1}
          name='Item 01'
          code='ITEM01'
          available={10}
        />
        <CardItem
          id={1}
          name='Item 01'
          code='ITEM01'
          available={10}
        />
        <CardItem
          id={1}
          name='Item 01'
          code='ITEM01'
          available={10}
        />
        <CardItem
          id={1}
          name='Item 01'
          code='ITEM01'
          available={10}
        />
        <CardItem
          id={1}
          name='Item 01'
          code='ITEM01'
          available={10}
        />
      </div>
    </div>
  )
}

export default List
