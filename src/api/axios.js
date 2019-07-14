import axios from 'axios';

// change this variable.

const environment = 'production';

let HOST; 
if (environment === 'development') {
    HOST = 'http://localhost:8000';
} else {
    HOST = 'http://34.77.48.213:80'
};

const instance = axios.create({
    baseURL: HOST
});

export default instance;