import axios from 'axios'

const url = 'https://api.bailataan.fi/api/products?city=helsinki'

const getAll = () => {
    const request = axios.get(url)
    console.log(request.then(response => response.data))
    return request.then(response => response.data)
}

const testLog = () => {
    console.log("moi")
}

export default { getAll, testLog }