import axios from 'axios';
const conexionAxios=axios.create({
    baseURL: 'http://localhost:4010'
})

export default conexionAxios;