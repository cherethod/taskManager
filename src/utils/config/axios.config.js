import axios from "axios";

// Default config for AXIOS

export default axios.create(
  {
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',
    timeout: 6000
  }
)

// // Configuración predeterminada para AXIOS
// const APIRequest = axios.create({
//   baseURL: 'https://randomuser.me/api',
//   responseType: 'json',
//   timeout: 6000
// });

// // Interceptor para manejar las solicitudes
// APIRequest.interceptors.request.use(
//   (config) => {
//     // console.log('Request:', config.method, config.url);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor para manejar las respuestas
// APIRequest.interceptors.response.use(
//   (response) => {
//     // console.log('Response:', response.status, response.statusText);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default APIRequest;