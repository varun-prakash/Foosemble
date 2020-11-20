import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://foosemble.firebaseio.com/'
});

export default instance;