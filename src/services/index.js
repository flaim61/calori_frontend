import axios from "axios"
export const apiBase = "https://testcaloriapi.ru";
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
    return await $api.post('/api/application', data, {
        headers: {
          'referral': localStorage.getItem('referral')
        }
    });
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

export const saveDeliveryInfo = async (data) => {
  return await $api.post('/api/delivery', data)
}

export const sendContactForm = async (data) => {
  return await $api.post('/api/form', data)
}

export const getDeliveryInfo = async (data) => {
  return await $api.get('/api/delivery-info', data)
}

export const createCheckoutSession = async (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  return await $api.post('/create-checkout-session', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Устанавливаем заголовок для мультипарт запроса
      }
  })
}
