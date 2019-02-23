import axios from 'axios'

const baseurl = '/api/lukkari'

const findByGroupId = (id) => {
  const request = axios.get(`${baseurl}/${id}`)
  console.log(request.then(response => response.data))
  return request.then(response => response.data)
}

export default { findByGroupId } 