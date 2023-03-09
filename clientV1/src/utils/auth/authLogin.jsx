// import api from '../api'
import { Api } from '../ApiV2'

export const authLogin = (data) => {
  // return api('login', data).then(response => {
  //   if (response.logged) {
  //     localStorage.setItem('login', JSON.stringify({
  //       logged: response.logged,
  //       user: {
  //         id: response.data.users_id,
  //         name: response.data.users_name,
  //         email: response.data.users_email
  //       }
  //     }))

  //     localStorage.setItem('token', JSON.stringify(response.token))

  //     return response
  //   }

  //   return response
  // })

  return Api('login', data).call().then(response => {
    if (response.logged) {
      localStorage.setItem('login', JSON.stringify({
        logged: response.logged,
        user: {
          id: response.data.users_id,
          name: response.data.users_name,
          email: response.data.users_email
        }
      }))

      localStorage.setItem('token', JSON.stringify(response.token))

      return response
    }
  })
}
