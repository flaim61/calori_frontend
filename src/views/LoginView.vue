<template>
  <section class='login-view'>
    <div class="login-header">
      <template v-if='!this.forgotPass'>
        <h2 class='d-flex justify-content-between'>
          <span> {{ this.$locales('login_hellow_title') }} </span>
          <div class="back-button" @click='this.$router.push("/")'>
            {{ this.$locales('back_home') }}
          </div>
        </h2>
      </template>
      <template v-else>
        <h2 class='d-flex justify-content-between'>
          <span> {{ this.$locales('reset_password') }} </span>
          <div class="back-button" @click='this.forgotPass = false'>
            {{ this.$locales('login_back') }}
          </div>
        </h2>
      </template>
    </div>
    <div class="card login-section">
      <div class="input-section mb-3 mt-0">
        <label for="email">{{ this.$locales('email') }}</label>
        <input type="text" v-model='this.email' id='email' placeholder="Your e-mail" autocomplete="off">
      </div>
      <div class="input-section mt-0" v-if='!this.forgotPass' :class='{ "error": this.loginError }'>
        <label for="password">{{ this.$locales('password') }}</label>
        <Password v-model="this.password" placeholder='Your password' toggleMask :feedback="false" />
        <span>{{ this.$locales('error_not_correct_login_or_password') }}</span>
      </div>
      <a class="forgot" href="#" v-if='!this.forgotPass' @click='this.forgotPass = true'>{{ this.$locales('forgot_password') }}</a>
      <div class="button mt-0 mb-0" @click='login' v-if='!this.forgotPass'>
        <div>{{ this.$locales('login') }}</div>
        <img src="@/assets/img/icon/button_arrow.svg">
      </div>
      <div class="button mt-0 mb-0" @click='resetPassword' v-else>
        <div>{{ this.$locales('send_new_password') }}</div>
        <img src="@/assets/img/icon/button_arrow.svg">
      </div>
    </div>
  </section>
</template>

<script>
import { login, resetPassword } from "@/services/index.js"
import Password from 'primevue/password';

export default {
  name: "LoginView",
  data(){
    return {
      forgotPass: false,
      loginError: false,
    }
  },
  components: {
    Password
  },
  methods: {
    async login(){
      try {
        const response = await login({
          email: this.email,
          password: this.password
        });
        this.$cookies.set("auth_token", response.data.token);
        window.location.href = '/profile';
      } catch (e) {
        console.log(e)
        this.loginError = true;
      }
    },
    async resetPassword(){
      try {
        const response = await resetPassword({
          email: this.email,
        });

        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your new login and password was send on your email!',
          showConfirmButton: false,
          timer: 1500
        })

        this.forgotPass = false;
      } catch (e) {
        console.log(e)
        this.loginError = true;
      }
    }
  }
}
</script>

<style>

  .login-header{
    padding: 0 16px;
  }
  .forgot{
    text-decoration: none;
    display: inline-block;
    margin-bottom: 16px;
    color: var(--Grey, #92979B);
    /* Text h3 bold */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 16.8px */
  }

  .login-section{
    border-radius: 10px;
    background: var(--White, #FFF);
    padding: 16px;
    margin-bottom: 5vh;
    margin-bottom: 20vh;
    position: absolute;
    bottom: 16px;
    margin-bottom: 0;
    width: calc(100% - 20px);
  }
  .login-view{
    background-color: #E4E9EF;
    height: 100vh;
    width: 100vw;
    padding: 20px 10px;
    box-sizing: border-box;
  }
  h2{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  p{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  .back-button{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 16.8px */
    border-radius: 10px;
    border: 1px solid var(--Black, #2C2D31);
    background: var(--White, #FFF);
    padding: 8px;
    width: fit-content;
    white-space: nowrap;
    height: fit-content;
  }

  @media screen and (min-width: 1000px) {
    .login-section{
      flex-direction: column !important;
      left: calc(50% - 300px) !important;
      width: 600px !important;
      bottom: 40%;
    }
  }
</style>
