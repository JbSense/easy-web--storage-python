import axios from 'axios'

const apiBaseUrl = 'http://127.0.0.1:8000/'
const headers = { Authorization: JSON.parse(localStorage.getItem('token')) }

const routes = {
  login: {
    method: 'POST',
    path: 'auth-login'
  },
  storageGetAllSimple: {
    method: 'GET',
    path: 'storage-getAllSimple'
  }
}

export default function api (conf) {
  const path = conf.params !== undefined ? `${routes[conf.route].path}/${conf.params}` : routes[conf.route].path

  const config = {
    method: routes[conf.route].method,
    url: apiBaseUrl + path,
    data: conf.data !== undefined ? conf.data : null,
    headers
  }

  return axios(config).then(response => response.data)
}
