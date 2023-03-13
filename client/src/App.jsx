import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotLogged from './utils/middlewares/NotLogged'
import Logged from './utils/middlewares/Logged'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Home from './pages/Home'
import ItemList from './pages/Item/List'

function App () {
  const session = useSelector(state => state.session)
  console.log(session)

  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
          <Route element={<NotLogged />}>
            <Route path='/login' element={<Login />} />
          </Route>

          <Route element={<Logged />}>
            <Route path='/dashboard' element={<Layout />}>
              <Route path='home' element={<Home />} />
              <Route path='item-list' element={<ItemList />} />
            </Route>

            <Route path='logout' element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
