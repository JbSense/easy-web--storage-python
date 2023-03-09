import axios from 'axios'

const apiBaseUrl = 'http://127.0.0.1:8000/'

const headers = {
  Authorization: JSON.parse(localStorage.getItem('token'))
}

export class Api {
  constructor (route, params = null) {
    this.apiBaseUrl = 'http://127.0.0.1:8000/'
    this.headers = { Authorization: JSON.parse(localStorage.getItem('token')) }
    this.route = route
    this.params = params

    this.routes = {
      login: {
        method: 'POST',
        url: this.apiBaseUrl + 'auth-login',
        data: this.params,
        headers
      }
    }
  }

  call () {
    return axios(this.route).then(response => response.data)
  }
}
