import React, { useState } from 'react'
import './index.css'
import arrowIcon from '../../assets/icons/arrow-light.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../features/searchSlice'

function Filter (props) {
  const [filterOpen, setFilterOpen] = useState(false)
  const dispath = useDispatch()
  let filter = useSelector(state => state.search).filter

  if (filter === 'name') filter = 'nome'
  if (filter === 'code') filter = 'código de referência'

  const handleChangeOption = (event) => {
    dispath(setFilter(event.target.value))
  }

  const openFilter = () => {
    setFilterOpen(!filterOpen)
    if (!filterOpen) document.querySelector('.Filter').classList.add('filter-open')
    if (filterOpen) document.querySelector('.Filter').classList.remove('filter-open')
  }

  return (
    <div className='Filter'>
      <div className='Filter-show' onClick={openFilter}>
        <p className='Filter--label'>Buscar por {filter}</p>
        <img src={arrowIcon} alt='Arrow' className='Filter--arrow' />
      </div>

      <div className='Filter-options' onChange={handleChangeOption}>
        <input
          type='radio'
          name='filter-option'
          id='option-name'
          value='name'
          className='Filter--field'
        />
        <label htmlFor='option-name' className='Filter--label'>Nome</label>

        <input
          type='radio'
          name='filter-option'
          id='option-code'
          value='code'
          className='Filter--field'
        />
        <label htmlFor='option-code' className='Filter--label'>Código de referência</label>
      </div>
    </div>
  )
}

export default Filter
