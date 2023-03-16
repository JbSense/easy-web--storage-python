import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setSession } from '../../redux/slices/sessionSlice'
import { login } from '../../utils/auth/login'
import './index.css'

function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChangeValues = () => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const verifyEmail = () => {
    if (!values.email.includes('@')) return document.getElementById('email-field').classList.add('error-field')
    document.getElementById('email-field').classList.remove('error-field')
  }

  const handleLogin = () => {
    login(values).then(response => {
      dispatch(setSession(response))
      if (response.logged) return navigate('/dashboard/item-list')

      console.log('login incorreto')
    })
  }

  return (
    <div className='Login'>
      <div className='Login__welcome'>
        <h1 className='ui-title'>Bem vindo a Easy Web</h1>
        <p className='ui-subtitle-msg'>Aqui você produz mais!</p>
      </div>

      <div className='Login__form'>
        <div className='ui-dark-theme ui-field' id='email-field'>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='ui-field__input'
            onChange={handleChangeValues}
            onBlur={verifyEmail}
          />

          <label htmlFor='email' className='ui-field__label'>E-mail</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>

        <div className='ui-dark-theme ui-field'>
          <input
            type='password'
            name='password'
            id='password'
            required
            className='ui-field__input'
            onChange={handleChangeValues}
          />

          <label htmlFor='password' className='ui-field__label'>Senha</label>

          <span className='ui-dark-theme ui-field__border'></span>
        </div>
      </div>

      <p className='ui-pwl'>Ao fazer login, você concorda com a <Link to='/account-create'>Política de privacidade</Link> e com os Termos de uso da Easy Web.</p>

      <button className='ui-dark-theme ui-btn-primary' onClick={handleLogin}>Send</button>

      <p className='ui-pwl'>Não tem conta? <Link to='/account-create'>Crie uma aqui.</Link></p>
    </div>
  )
}

export default Login
