export const authLogout = () => {
  localStorage.setItem('login', JSON.stringify({
    logged: false,
    user: {
      id: null,
      name: '',
      email: ''
    }
  }))

  localStorage.setItem('token', JSON.stringify(''))
}
