import axios from 'axios'
import { REACT_APP_URL, REACT_APP_PORT } from 'react-native-dotenv'

const api = axios.create({
    baseURL: `${REACT_APP_URL}:${REACT_APP_PORT}`
})

function onRequestSuccess(response) {
    return response.data
}

function onRequestFailure(err) {
    throw err.response.data
}

api.interceptors.response.use(onRequestSuccess, onRequestFailure)

export default api