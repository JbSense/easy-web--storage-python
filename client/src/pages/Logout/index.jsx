import React from 'react'
import { logout } from '../../utils/auth/logout'

function Logout () {
  const handleLogout = () => {
    return logout()
  }

  return (
    <div>
      <h1>Logout</h1>
      {handleLogout()}
    </div>
  )
}

export default Logout
