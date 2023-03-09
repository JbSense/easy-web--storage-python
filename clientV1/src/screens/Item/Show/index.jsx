import React, { useEffect } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Show () {
  const { id } = useParams()
  const item = useSelector(state => state.item)

  useEffect(() => {
    console.log(id)
  }, [])

  return (
    <div className='Item-show'></div>
  )
}

export default Show
