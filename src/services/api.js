import axios from 'axios'

const api = axios.create({
    baseURL: 'https://explorefood-api.onrender.com'
}) 

export {api}
