import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../../components/ErrorMessage'
import Slogan from '../../../components/Slogan'
import api from '../../../utils/api'
import './index.css'

function Create () {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChangeValues = (e) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const setInvalidField = (field) => document.getElementById('Account-create-' + field).classList.add('ui-invalid-field')
  const setDefaultField = (field) => document.getElementById('Account-create-' + field).classList.remove('ui-invalid-field')

  const verifyField = () => {
    if (userData.name === '') return setInvalidField('name')
    if (userData.email === '' || !userData.email.includes('@') || !userData.email.includes('.com') || userData.email.includes(' ')) return setInvalidField('email')
    if (userData.password === '' || userData.password.length < 8 || userData.password.includes(' ')) return setInvalidField('password')
    return true
  }

  const handleSubmit = () => {
    if (verifyField()) {
      api('userCreate', userData).then(response => {
        if ('error' in response) {
          return setErrorMessage(response.message)
        }
        navigate('/login')
      })
    }
  }

  useEffect(() => {
    setDefaultField('name')
    setDefaultField('email')
    setDefaultField('password')
  }, [userData])

  return (
    <div className='Account-create'>
      <ErrorMessage message={errorMessage} />

      <Slogan />

      <div className='Account-create-form'>
        <div className='Account-create-input' id='Account-create-name'>
          <input
            type='text'
            name='name'
            id='name'
            value={userData.name}
            className='Account-create--field'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='name' className='Account-create--label'>Nome</label>
        </div>

        <div className='Account-create-input' id='Account-create-email'>
          <input
            type='text'
            name='email'
            id='email'
            value={userData.email}
            className='Account-create--field'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='email' className='Account-create--label'>E-mail</label>
        </div>

        <div className='Account-create-input' id='Account-create-password'>
          <input
            type='password'
            name='password'
            id='password'
            value={userData.password}
            className='Account-create--field'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='password' className='Account-create--label'>Senha</label>
        </div>
      </div>

      <button className='ui-btn-dark' onClick={handleSubmit}>Salvar</button>

      <p className='Account-create--has-account'>Já tem conta? <Link to='/login'>Faça o login aqui</Link></p>
    </div>
  )
}

export default Create
