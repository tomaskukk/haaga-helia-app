import axios from 'axios'

const urlPasila = '/api/amica/pasila'
const urlMalmi = '/api/amica/malmi'
const urlHaaga = '/api/amica/haaga'

const getAllPasila = async () => {
    const response = await axios.get(urlPasila)
    return (response.data)
}

const getAllMalmi = async () => {
    const response = await axios.get(urlMalmi)
    return (response.data)
}

const getAllHaaga = async () => {
    const response = await axios.get(urlHaaga)
    return (response.data)
}


export default { getAllPasila, getAllMalmi, getAllHaaga }