<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { checkAuth } from '@/services/index.js';

export default {
  name: "App",
  data(){
    return {

    }
  },
  async created(){
    await this.checkAuth();
    this.checkReferral();
    console.log(this.$store.state.auth)
    console.log(this.$cookies.get('auth_token'));
  },
  methods: {
    checkReferral(){
      const url = new URL(location.href);
      if (url.searchParams.get('referral')) {
        localStorage.setItem('referral', url.searchParams.get('referral'));
      }
    },
    async checkAuth(){
      try {
        const response = await checkAuth();
        this.$store.commit('setAuth', true);
        if(this.$store.state.onlyNotAuthorize.indexOf(this.$route.name) !== -1){
          this.$router.push("/profile");
        }
      } catch (e) {
        if(this.$store.state.onlyAuthorize.indexOf(this.$route.name) !== -1){
          this.$router.push("/login");
        }
      }
    }
  }
}
</script>

<style>
</style>
