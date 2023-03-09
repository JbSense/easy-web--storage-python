import api from '../../utils/api'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import arrowIcon from '../../assets/icons/arrow-light-2.svg'
import { setWords } from '../../features/searchSlice'
import Filter from '../Filter'
import './index.css'
import { setItems } from '../../features/itemsSlice'

function Search () {
  const search = useSelector(state => state.search)
  const dispath = useDispatch()

  const handleChangeWords = (event) => {
    dispath(setWords(event.target.value))
  }

  useEffect(() => {
    if (search.words !== 'null') {
      api('search', search).then(response => {
        if (!response === false) api('search', search).then(response => dispath(setItems(response)))
      })
    }
  }, [search.words])

  return (
    <div className='Search'>
      <Filter />

      <div className='Search-field-content'>
        <input
          type='search'
          name='search'
          value={search.words}
          placeholder='Buscar no estoque...'
          className='Search-field'
          onChange={handleChangeWords}
        />
      </div>
    </div>
  )
}

export default Search
