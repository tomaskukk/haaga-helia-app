import axios from 'axios'

const baseUrl = '/api/users'

const create = async (newObject) => {
    try {
        const response = await axios.post(baseUrl, newObject)
        console.log(response.data)
        return response.data
    } catch(exception) {
        console.log(exception)
    }
}

export default { create }
