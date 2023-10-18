import axios from 'axios'
import store from '@/store'

export default () => {
    return axios.create({
        baseURL: 'http://10.10.59.14:8081/',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}