import axios from 'axios'

const urlPasila = '/api/amica/pasila'
const urlMalmi = '/api/amica/malmi'
const urlHaaga = '/api/amica/haaga'

const getAllPasila = async () => {
    console.log("PENDING")
    const response = await axios.get(urlPasila)
    console.log("DONE")
    console.log(response)
    return (response.data)
}

const getAllMalmi = async () => {
    console.log("PENDING")
    const response = await axios.get(urlMalmi)
    console.log("DONE")
    console.log(response)
    return (response.data)
}

const getAllHaaga = async () => {
    console.log("PENDING")
    const response = await axios.get(urlHaaga)
    console.log("DONE")
    console.log(response)
    return (response.data)
}


export default { getAllPasila, getAllMalmi, getAllHaaga }