import axios from 'axios'

const baseUrl = '/api/courses'


let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const create = async (newObject) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const del = async (thisCourse) => {

    const config = {
      headers: {'Authorization': token }
    }
    const url = `${baseUrl}/${thisCourse.id}`
    const response = await axios.delete(url, config)
    return response
  }

export default {  create, setToken, del }