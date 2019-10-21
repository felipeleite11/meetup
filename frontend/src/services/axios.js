import axios from 'axios'

const api = axios.create({
    //baseURL: `${process.env.APP_URL}:${process.env.APP_PORT}`
    baseURL: `http://localhost:3333`
})

function onRequestSuccess(response) {
    return response.data
}

function onRequestFailure(err) {
    throw err.response.data
}

api.interceptors.response.use(onRequestSuccess, onRequestFailure)

export default api