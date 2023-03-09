import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../../components/ErrorMessage'
import { setLogin } from '../../../features/auth/loginSlice'
import { authLogin } from '../../../utils/auth/authLogin'
import Slogan from '../../../components/Slogan'
import './index.css'

function Login () {
  const logged = JSON.parse(localStorage.getItem('login')).logged
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChangeValues = (e) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const setInvalidField = (field) => document.getElementById('Login-' + field).classList.add('ui-invalid-field')
  const setDefaultField = (field) => document.getElementById('Login-' + field).classList.remove('ui-invalid-field')

  const verifyField = () => {
    if (userData.email === '' || !userData.email.includes('@') || !userData.email.includes('.com') || userData.email.includes(' ')) return setInvalidField('email')
    if (userData.password === '' || userData.password.length < 8 || userData.password.includes(' ')) return setInvalidField('password')
    return true
  }

  const handleSubmit = () => {
    if (verifyField()) {
      authLogin(userData).then(response => {
        setErrorMessage(response.message)
        return navigate('/dashboard/item-list')
      })
    }
  }

  useEffect(() => {
    setDefaultField('email')
    setDefaultField('password')
  }, [userData, logged])

  return (
    <div className='Login'>
      <ErrorMessage message={errorMessage} />

      <Slogan />

      <div className='Login-form'>
        <div className='Login-input' id='Login-email'>
          <input
            type='email'
            name='email'
            id='email'
            value={userData.email}
            className='Login--field'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='email' className='Login--label'>E-mail</label>
        </div>

        <div className='Login-input' id='Login-password'>
          <input
            type='password'
            name='password'
            id='password'
            value={userData.password}
            className='Login--field'
            onChange={handleChangeValues}
            required
          />

          <label htmlFor='password' className='Login--label'>Senha</label>
        </div>
      </div>

      <button className='ui-btn-dark' onClick={handleSubmit}>Entrar</button>

      <p className='Login-not-account'>Não tem conta? <Link to='/account-create'>Crie uma aqui</Link></p>
    </div>
  )
}

export default Login
