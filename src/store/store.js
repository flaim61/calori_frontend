import { createStore } from 'vuex'
import VueCookies from 'vue3-cookies'
import Cookies from 'js-cookie'

const store = createStore({
  state () {
    return {
      auth: false,
      onlyAuthorize: [
        'profile',
      ],
      onlyNotAuthorize: [
        'login',
      ],
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setAuth(state, auth){
      state.auth = auth;
    }
  }
})

export default store;
