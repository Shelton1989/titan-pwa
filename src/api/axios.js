import axios from 'axios';

// change this variable.

const environment = 'production';

let HOST; 
if (environment === 'development') {
    HOST = 'http://localhost:8000';
} else {
    HOST = 'http://35.195.253.72:80/'
};

const instance = axios.create({
    baseURL: HOST
});

export default instance;