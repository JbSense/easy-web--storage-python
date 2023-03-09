import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotLogged from './utils/middlewares/NotLogged'
import Login from './pages/Login'

function App () {
  const session = useSelector(state => state.session)
  // const session = JSON.parse(sessionStorage.getItem('session'))
  console.log(session)

  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
          <Route element={<NotLogged />}>
            <Route path='login' element={<Login />} />

          </Route>

          <Route path='/' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
