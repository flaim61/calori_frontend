import axios from "axios"
export const apiBase = "http://testcaloriapi.ru:8080";
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

export const getApplication = async () => {
    return await $api.get('/api/application');
}

export const getPesonalPlan = async () => {
    return await $api.get('/api/PersonalPlan');
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

export const resetPassword = async (data) => {
  return await $api.post('/api/auth/password/reset', data);
}

export const changePassword = async (data) => {
  return await $api.post('/api/auth/password/change', data)
}

export const createCheckoutSession = async (data) => {
  return await $api.post('/create-checkout-session', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
