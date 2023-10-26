<template>
  <section class='login-view'>
    <div class="login-header">
      <template v-if='!this.forgotPass'>
        <h2>
          Welcome to Calori
        </h2>
        <p>hehe</p>
      </template>
      <template v-else>
        <h2 class='d-flex justify-content-between'>
          <span>Reset password</span>
          <div class="back-button" @click='this.forgotPass = false'>
            Log in Back
          </div>
        </h2>
      </template>
    </div>
    <div class="card login-section">
      <div class="input-section">
        <label for="email">Email</label>
        <input type="text" id='email' placeholder="Your e-mail" autocomplete="off">
      </div>
      <div class="input-section" v-if='!this.forgotPass' :class='{ "error": this.loginError }'>
        <label for="password">Password</label>
        <input type="password" id='password' placeholder="Your password" autocomplete="off">
        <span>Description</span>
      </div>
      <a class="forgot" href="#" v-if='!this.forgotPass' @click='this.forgotPass = true'>Forgot password?</a>
      <div class="button" @click='login' v-if='!this.forgotPass'>
        <div>Login</div>
        <img src="@/assets/img/icon/button_arrow.svg">
      </div>
      <div class="button" @click='resetPass' v-else>
        <div>Send new password on Email</div>
        <img src="@/assets/img/icon/button_arrow.svg">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data(){
    return {
      forgotPass: false,
      loginError: true,
    }
  },
  methods: {
    login(){
      this.$router.push('profile');
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
  }
</style>
