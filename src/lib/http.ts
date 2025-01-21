import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60 * 1000,
})

httpClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

httpClient.interceptors.response.use(
  (response) => {
    return response?.data[0]
  },
  (error) => {
    if (error?.response?.status === 401) {
      setTimeout(() => {
        window.location.replace(`${window.location.origin}/login`)
      }, 3000)
    }
    if (error?.response && error?.response?.data) {
      return Promise.reject(error?.response?.data)
    }

    return Promise.reject(error)
  },
)

export default httpClient
