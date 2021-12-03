import axios from "axios";
//local
const URL_PREFIX = "http://localhost:3001";
//deployed
// const URL_PREFIX = "https://zoo-school-back.herokuapp.com";

const API = {
    getProfile: (tkn) => {
        return axios.get(`${URL_PREFIX}/profile`, {
            headers: {
                "Authorization": `Bearer ${tkn}`
            }
        })
    },
    login: (usrData) =>{
        return axios.post(`${URL_PREFIX}/login`,usrData)
    },
    signup: (usrData) =>{
        return axios.post(`${URL_PREFIX}/signup`,usrData)
    },
    quest: () => {
        return axios.get(`${URL_PREFIX}/questions`)
    },
    llama: () => {
        return axios.get(`${URL_PREFIX}/llama`)
    },
    arfox: () => {
        return axios.get(`${URL_PREFIX}/arfox`)
    },
    gorilla: () => {
        return axios.get(`${URL_PREFIX}/gorilla`)
    },
    boa: () => {
        return axios.get(`${URL_PREFIX}/boa`)
    },
    animal: () => {
        return axios.get(`${URL_PREFIX}/animals`)
    },

};

export default API;