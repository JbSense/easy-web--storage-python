import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addIcon from '../../assets/icons/add.svg'
import removeIcon from '../../assets/icons/remove.svg'
import { setAvailable, setInventory } from '../../redux/slices/itemSlice'
import './index.css'

function Available (props) {
  const dispatch = useDispatch()
  const inventory = { ...useSelector(state => state.item.inventory) }

  const handleChangeValues = () => {
    inventory[event.target.name] = event.target.value
    dispatch(setInventory(inventory))
  }

  const handleAdd = () => {
    inventory.available += 1
    dispatch(setInventory(inventory))
  }
  const handleRemove = () => {
    if (inventory.available > 0) {
      inventory.available -= 1
      dispatch(setInventory(inventory))
    }
  }

  return (
    <div className='Available'>
      <h2 className='ui-subtitle'>Quantidade</h2>

      <div className='Available__form'>
        <button className='Available__remove' onClick={handleRemove}><img src={removeIcon} alt='Remove icon' /></button>

        <div className='ui-dark-theme ui-field Available__field'>
          <input
            type='number'
            name='available'
            id='available'
            value={inventory.available === null || !props.update ? '' : inventory.available}
            required
            className='ui-field__input'
            onChange={handleChangeValues}
          />

          <label htmlFor='available' className='ui-field__label'>Quantidade</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>

        <button className='Available__add' onClick={handleAdd}><img src={addIcon} alt='Add icon' /></button>
      </div>
    </div>
  )
}

export default Available
