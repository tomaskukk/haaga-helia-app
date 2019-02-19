import axios from 'axios'

const baseUrl = '/api/courses'


let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const create = async (newObject) => {
    console.log("LUODAAN KURSSI")
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(baseUrl, newObject, config)
    console.log(response.data)
    return response.data
}

const del = async (thisCourse) => {

    console.log(thisCourse)
    const config = {
      headers: {'Authorization': token }
    }
    const url = `${baseUrl}/${thisCourse.id}`
    console.log("SENDING DELETE REQUEST TO BACKEND")
    const response = await axios.delete(url, config)
    console.log("REQUEST SENT")
    console.log(response)
    return response
  }

export default {  create, setToken, del }