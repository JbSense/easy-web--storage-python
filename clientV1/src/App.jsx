import React, { useState, useEffect } from 'react'
import Router from './Router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Items from './components/Items'
import Login from './screens/auth/Login'
import Header from './components/Layout/Header'
import { useSelector } from 'react-redux'
import Content from './components/Layout/Content'
import Layout from './components/Layout'
import List from './screens/Item/List'
import Protected from './utils/middlewares/Protected'
import NotProtected from './utils/middlewares/NotProtected'
import ItemCreate from './screens/Item/Create'
import ItemShow from './screens/Item/Show'

function App () {
  const login = useSelector(state => state.login)
  console.log(login)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<NotProtected />}>
            <Route path='/login' element={<Login />}/>
          </Route>

          <Route element={<Protected />}>
            <Route path='/dashboard' element={<Layout />}>
              <Route path='item-list' element={<List />} />
              <Route path='item-create' element={<ItemCreate />} />
              <Route path='item-show/:id' element={<ItemShow />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
