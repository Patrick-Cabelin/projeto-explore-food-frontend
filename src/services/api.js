import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3009'
}) 

export {api}