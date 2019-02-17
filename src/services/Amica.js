import axios from 'axios'

const url = '/api/amica'

const getAll = async () => {
    console.log("PENDING")
    const response = await axios.get(url)
    console.log("DONE")
    console.log(response)
    return (response.data)
}

export default { getAll }