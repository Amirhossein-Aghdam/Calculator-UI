import axios from 'axios'

export default axios.create({
    baseURL: "192.168.1.1:8080/api/expression"
})