import axios from 'axios'

const url = 'https://www.fazerfoodco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=177431&weekDate=2019-02-15'

/* const getAll = () => {
    const config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
    const request = axios.get(url, config)
    console.log(request)
    console.log(request.then(response => response.data))
    return request.then(response => response.data)
} */

const testLog = () => {
    console.log("moi")
}

export default { testLog }