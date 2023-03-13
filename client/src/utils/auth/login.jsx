import api from '../api'

export const login = (credentials) => {
  return api({
    route: 'login',
    data: credentials
  })
    .then(response => {
      if (response.logged) {
        sessionStorage.setItem('session', JSON.stringify({
          logged: true,
          user: response.user,
          token: response.token
        }))
      }

      return response
    })
}
