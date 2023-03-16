import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Inventory from '../../../components/Inventory'
import { setInitialState, setItem } from '../../../redux/slices/itemSlice'
import api from '../../../utils/api'
import './index.css'

function Create () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const item = { ...useSelector(state => state.item.item) }
  const completeItem = useSelector(state => state.item)

  const handleChangeValues = () => {
    item[event.target.name] = event.target.value
    dispatch(setItem(item))
  }

  const handleSend = () => {
    api({
      route: 'storageCreate',
      data: completeItem
    }).then(response => {
      dispatch(setInitialState())
      return navigate('/dashboard/item-list')
    })
  }

  return (
    <div className='Item-create'>
      <h1 className='ui-title'>Adicionar ao estoque</h1>

      <div className='Item-create__form'>
        <div className='ui-dark-theme ui-field'>
          <input
            type='name'
            name='name'
            id='name'
            required
            className='ui-field__input'
            onChange={handleChangeValues}
          />

          <label htmlFor='email' className='ui-field__label'>Nome</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>

        <div className='ui-dark-theme ui-field'>
          <input
            type='text'
            name='code'
            id='code'
            required
            className='ui-field__input'
            onChange={handleChangeValues}
          />

          <label htmlFor='password' className='ui-field__label'>Código de referência</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>

        <div className='Item-create__prices'>
          <h2 className='ui-subtitle'>Preços</h2>

          <div className='ui-dark-theme ui-field'>
            <input
              type='number'
              name='buy_price'
              id='buy_price'
              step="0.01"
              required
              className='ui-field__input'
              onChange={handleChangeValues}
            />

            <label htmlFor='password' className='ui-field__label'>Compra</label>

            <span className='ui-dark-theme ui-field__border'></span>
          </div>

          <div className='ui-dark-theme ui-field'>
            <input
              type='number'
              name='sale_price'
              id='sale_price'
              step="0.01"
              required
              className='ui-field__input'
              onChange={handleChangeValues}
            />

            <label htmlFor='password' className='ui-field__label'>Venda</label>

            <span className='ui-dark-theme ui-field__border'></span>
          </div>
        </div>

        <Inventory />
      </div>

      <button className='ui-dark-theme ui-btn-primary' onClick={handleSend}>Salvar</button>
    </div>
  )
}

export default Create
