import axios from 'axios'

const url = '/api/kide'

const getAllKideApp = async () => {
    const response = await axios.get(url)
    return (response.data)
}


export default { getAllKideApp }