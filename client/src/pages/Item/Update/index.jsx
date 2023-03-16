import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Inventory from '../../../components/Inventory'
import { setInitialState, setInventory, setItem } from '../../../redux/slices/itemSlice'
import api from '../../../utils/api'
import './index.css'

function Update () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [item, setItemState] = useState(null)

  useEffect(() => {
    api({
      route: 'getById',
      params: id
    }).then(response => {
      setItemState({
        id: response.item.items_id,
        name: response.item.items_name,
        code: response.item.items_code,
        desc: response.item.items_desc,
        buy_price: response.item.items_buy_price,
        sale_price: response.item.items_sale_price
      })
    })

    api({
      route: 'getById',
      params: id
    }).then(response => {
      dispatch(setInventory({
        available: response.inventory.inventories_available,
        unit_type: response.inventory.inventories_unit_type_id
      }))
    })
  }, [])

  const inventory = useSelector(state => state.item.inventory)
  const completeItem = {
    item,
    inventory,
    colors: []
  }

  const handleChangeValues = () => {
    setItemState({
      ...item,
      [event.target.name]: event.target.value
    })
  }

  const handleSend = () => {
    api({
      route: 'storageUpdate',
      data: completeItem
    }).then(response => {
      dispatch(setInitialState())
      return navigate('/dashboard/item-list')
    })
  }

  return (
    <div className='Item-update'>
        <h1 className='ui-title'>Adicionar ao estoque</h1>

      <div className='Item-update__form'>
        <div className='ui-dark-theme ui-field'>
          <input
            type='name'
            name='name'
            id='name'
            value={item === null ? '' : item.name}
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
            value={item === null ? '' : item.code}
            required
            className='ui-field__input'
            onChange={handleChangeValues}
          />

          <label htmlFor='password' className='ui-field__label'>Código de referência</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>

        <div className='Item-update__prices'>
          <h2 className='ui-subtitle'>Preços</h2>

          <div className='ui-dark-theme ui-field'>
            <input
              type='number'
              name='buy_price'
              id='buy_price'
              step="0.01"
              value={item === null ? '' : item.buy_price}
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
              value={item === null ? '' : item.sale_price}
              required
              className='ui-field__input'
              onChange={handleChangeValues}
            />

            <label htmlFor='password' className='ui-field__label'>Venda</label>

            <span className='ui-dark-theme ui-field__border'></span>
          </div>
        </div>

        <Inventory update={true} />
      </div>

      <button className='ui-dark-theme ui-btn-primary' onClick={handleSend}>Salvar</button>
    </div>
  )
}

export default Update
