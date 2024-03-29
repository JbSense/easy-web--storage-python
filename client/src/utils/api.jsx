import axios from 'axios'

const session = JSON.parse(sessionStorage.getItem('session'))

const apiBaseUrl = 'http://127.0.0.1:8000/'
const headers = { Authorization: session !== null ? session.token : null }

const routes = {
  login: {
    method: 'POST',
    path: 'auth-login'
  },
  getById: {
    method: 'GET',
    path: 'storage-getById'
  },
  storageGetAllSimple: {
    method: 'GET',
    path: 'storage-getAllSimple'
  },
  storageCreate: {
    method: 'POST',
    path: 'storage-create'
  },
  storageUpdate: {
    method: 'PUT',
    path: 'storage-update'
  },
  storageDelete: {
    method: 'DELETE',
    path: 'storage-delete'
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
