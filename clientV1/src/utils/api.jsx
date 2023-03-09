// import axios from 'axios'

// const apiBaseUrl = 'http://127.0.0.1:8000/'

// const headers = {
//   Authorization: JSON.parse(localStorage.getItem('token'))
// }

// const user = JSON.parse(localStorage.getItem('login')).user

// const routes = {
//   login: {
//     method: 'POST',
//     url: apiBaseUrl + 'auth-login',
//     data: {},
//     headers
//   },
//   userCreate: {
//     method: 'POST',
//     url: apiBaseUrl + 'user-create',
//     data: {},
//     headers
//   },
//   storageGetById: {
//     method: 'GET',
//     url: apiBaseUrl + 'storage-storage-getById/' + user.id,
//     data: {},
//     headers
//   },
//   getAllSimple: {
//     method: 'GET',
//     url: apiBaseUrl + 'storage-getAllSimple/' + user.id,
//     data: {},
//     headers
//   },
//   search: {
//     method: 'POST',
//     url: apiBaseUrl + 'storage-search',
//     data: {},
//     headers
//   },
//   itemCreate: {
//     method: 'POST',
//     url: apiBaseUrl + 'storage-create',
//     data: {},
//     headers
//   }
// }

// function api (route, data) {
//   routes[route].data = data
//   return axios(routes[route]).then(response => response.data)
// }

// export default api
