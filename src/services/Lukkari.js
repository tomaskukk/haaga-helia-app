import axios from 'axios'

const baseurl = '/api/lukkari'

const findByGroupId = (id) => {
  const request = axios.get(`${baseurl}/${id}`)
  return request.then(response => response.data)
}

const changeWeekLukkari = (week, cookie) => {
  const request = axios.get(`${baseurl}/${week}/${cookie}`)
  return request.then(response => response.data)
}

export default { findByGroupId, changeWeekLukkari } 