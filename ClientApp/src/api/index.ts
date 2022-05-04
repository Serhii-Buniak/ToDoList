import axios from "axios"


export const baseURL = 'https://localhost:7212/'

const instance = axios.create({
    baseURL: baseURL,
})

export default instance