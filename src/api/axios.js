import axios from 'axios';

// change this variable.

const environment = 'development';

let HOST; 
if (environment === 'development') {
    HOST = 'http://localhost:8000';
} else {
    HOST = ''
};

const instance = axios.create({
    baseURL: HOST
});

export default instance;