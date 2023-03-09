import React, { useEffect } from 'react'
import ListItems from '../../../components/ListItems'
import Search from '../../../components/Search'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import { setItems } from '../../../features/itemsSlice'
import api from '../../../utils/api'

function List () {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)

  useEffect(() => {
    if (login.logged) {
      api('getAllSimple').then(response => {
        if ('error' in response) return
        dispatch(setItems(response))
      })
    }
  }, [])

  if (login.logged) {
    return (
      <div className='Items'>
        <Search />
        <ListItems />
      </div>
    )
  }
}

export default List
