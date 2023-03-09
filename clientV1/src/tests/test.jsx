import arrowIcon from './assets/icons/arrow-light.svg'

import React from 'react'

function Test () {
  return (
    <div>
      <button className='ui-btn-dark'>Button</button>
      <button className='ui-btn-light'>Button</button>

      <div className='ui-input'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Input'
          className='ui-input--field'
          required
        />

        <label htmlFor='name' className='ui-input--label'>Nome</label>
      </div>

      <div className='ui-textarea'>
        <textarea
          name='desc'
          id='desc'
          cols='30'
          rows='5'
          placeholder='Textarea'
          className='ui-textarea--field'>
        </textarea>

        <label
          htmlFor='desc'
          className='ui-textarea--label'>Descrição</label>
      </div>

      <div className='ui-select'>
        <div className='ui-select-head'>
          <p className='ui-select--selected'>Buscar por</p>
          <img src={arrowIcon} alt='Arrow' className='ui-select--arrow' />
        </div>

        <div className='ui-select-options'>
          <input
            type='radio'
            name='filter-option'
            id='option-name'
            value='name'
            className='ui-select--input'
          />
          <label
            htmlFor='option-name'
            className='ui-select--label'>Nome</label>

          <input
            type='radio'
            name='filter-option'
            id='option-code'
            value='code'
            className='ui-select--input'
          />
          <label
            htmlFor='option-code'
            className='ui-select--label'>Código de referência</label>
        </div>
      </div>
    </div>
  )
}

export default Test
