import axios from 'axios'

const baseUrl = '/api/users'

const findById = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    console.log(request.then(response => response.data))
    return (request.then(response => response.data))
}

export default { findById }