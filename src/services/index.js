import axios from "axios"
export const apiBase = "http://188.225.31.105";
import Cookies from 'js-cookie'

const $api = axios.create({
    withCredentials: false,
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${Cookies.get('auth_token')}`,
    }
})

export const getApplicationWeight = async (data) => {
    return await $api.post('/api/application/weight', data);
}

export const createApplication = async (data) => {
    return await $api.post('/api/application', data);
}

export const updateApplication = async (data) => {
    return await $api.put('/api/application', data);
}

export const login = async (data) => {
    return await $api.post('/api/auth/login', data);
}

export const checkAuth = async () => {
  return await $api.post('/api/auth/check', {});
}
