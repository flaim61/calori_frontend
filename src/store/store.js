import { createStore } from 'vuex'
import VueCookies from 'vue3-cookies'
import Cookies from 'js-cookie'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      urlsWithoutAuth: [
        'Login',
        'Register',
      ],
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
  }
})

export default store;
