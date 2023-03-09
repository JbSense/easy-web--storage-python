import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItem } from '../../../features/itemSlice'
import api from '../../../utils/api'
import './index.css'

function Create () {
  const completeItem = useSelector(state => state.item)
  const item = { ...useSelector(state => state.item.item) }
  const dispatch = useDispatch()

  const handleChangeValues = (value) => {
    item[value.target.name] = value.target.value
    dispatch(setItem(item))
  }

  const handleSend = () => {
    api('itemCreate', completeItem).then(response => {
      console.log(response)
    })
    console.log(completeItem)
  }

  return (
    <div className='Item-create'>
      <h1 className='ui-title'>Adicionar</h1>

      <div className='Item-create-form'>
        <div className='ui-field'>
          <input
            type='text'
            name='name'
            id='name'
            className='ui-field--input'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='name' className='ui-field--label'>Nome</label>
        </div>

        <div className='ui-field'>
          <input
            type='text'
            name='code'
            id='code'
            className='ui-field--input'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='code' className='ui-field--label'>Código de referência</label>
        </div>

        <h2 className='ui-subtitle'>Valores de compra e venda</h2>

      <div className='Item-create-prices'>
        <div className='ui-field'>
          <input
            type='number'
            name='buy_price'
            id='buy_price'
            step="0.01"
            className='ui-field--input'
            required
            onChange={handleChangeValues}
          />
          <label htmlFor='buy_price' className='ui-field--label'>Compra</label>
        </div>

        <div className='ui-field'>
          <input
            type='number'
            name='sale_price'
            id='sale_price'
            step="0.01"
            className='ui-field--input'
            required
            onChange={handleChangeValues}
          />
          <label htmlFor='sale_price' className='ui-field--label'>Venda</label>
        </div>
      </div>

      <h2 className='ui-subtitle'>Quantidade</h2>

      <div className='ui-field ui-field-textarea'>
        <textarea
          name='desc'
          id='desc'
          cols='30'
          rows='5'
          className='ui-field--input'
          required
          onChange={handleChangeValues}
        />
        <label htmlFor='desc' className='ui-field--label'>Descrição</label>
      </div>

      <button className='ui-btn-dark' onClick={handleSend}>Salvar</button>
      </div>
    </div>
  )
}

export default Create
