import axios from 'axios';

const signup = (username, password) => {
    return axios.post('/api/auth/signup', {
        username, password
    }).then(response => response.data).catch(err => err.response.data);
}

const login = (username, password) => {
    return axios.post('/api/auth/login', { username, password }).then(response => {
        return response.data;
    }).catch(err => {
        return err.response.data;
    });
}

const logout = (username, password) => {
    return axios.delete('/api/auth/logout').then(response => {
        return response.data;
    }).catch(err => {
        return err.response.data;
    });
}
export default { signup, login, logout };