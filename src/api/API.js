const axios = require('axios');

const URL_PREFIX = "http://localhost:3001"



const API ={
    allAlgo: () => {
        return axios.get(`${URL_PREFIX}/questions`)
    },
}