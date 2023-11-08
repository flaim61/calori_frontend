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
    window.addEventListener('DOMContentLoaded', this.playVideo)
    if(!localStorage.getItem('locale')){
      localStorage.setItem('locale', 'fi');
    }
    console.log(this.$store.state.auth)
    console.log(this.$cookies.get('auth_token'));
  },
  methods: {
    playVideo(){
      var video = document.getElementById('home-video');
      var playRequested = false;

      document.body.addEventListener('click', function() {
          if (!playRequested) {
              video.play().then(function() {
                  // Воспроизведение началось успешно
              }).catch(function(error) {
                  // Ошибка воспроизведения
                  console.error('Ошибка воспроизведения видео: ', error);
              });
              playRequested = true;
          }
      });
    },
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
