import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}`
})

function onRequestSuccess(response) {
    return response.data
}

function onRequestFailure(err) {
    throw err.response.data
}

api.interceptors.response.use(onRequestSuccess, onRequestFailure)

export default api