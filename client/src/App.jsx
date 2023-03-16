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
import ItemCreate from './pages/Item/Create'
import ItemUpdate from './pages/Item/Update'

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
              <Route path='item-create' element={<ItemCreate />} />
              <Route path='item-update/:id' element={<ItemUpdate />} />
            </Route>

            <Route path='logout' element={<Logout />} />
          </Route>

          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
