import axios from 'axios'

const baseUrl = '/api/users'

const create = async (newObject) => {
    console.log(newObject)
    const response = await axios.post(baseUrl, newObject)
    console.log(response.data)
    return response.data
}

export default { create }
