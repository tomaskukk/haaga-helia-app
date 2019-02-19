import axios from 'axios'

const baseUrl = '/api/login'

const login = async (credentials) => {
    console.log("YRITETÄÄN KIRJAUTUA SERVICES")
    const response = await axios.post(baseUrl, credentials)
    console.log(response)
    return response.data
}


export default { login }
