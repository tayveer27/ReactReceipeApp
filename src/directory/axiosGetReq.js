import axios from 'axios'

const getData = (type) => {
    const APP_ID = '7f7e5015';
    const APP_KEY = '12e8f8d23598f8db7b890fe680274a8d';
    const url = `https://api.edamam.com/search?q=${type}&app_id=${APP_ID}&app_key=${APP_KEY}`
    return axios({
        method: 'get',
        url
    })
        .then(res => {
            return res.data.hits
        })
        .catch(err => {
            console.log(err)
        })
}

export default getData