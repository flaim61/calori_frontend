<template lang="html">
  <div class="card card-profile">
    <h3 class="mb-4">
      {{ this.$locales('language') }}
    </h3>
    <div class="button text-white justify-content-center" :class="{'grey':this.locale == 'en'}" @click="this.setLocales('en')">
      {{ this.$locales('english') }}
    </div>
    <div class="button text-white justify-content-center mt-3" :class="{'grey':this.locale == 'fi'}" @click="this.setLocales('fi')">
      {{ this.$locales('finland') }}
    </div>
  </div>
  <div class="card card-profile mt-4">
    <div class="input-section" :class="{'error' : this.errors.old_password}">
      <label for="password">
        {{ this.$locales('old_password') }}
      </label>
      <Password :placeholder="this.$locales('write_your_old_password')" v-model='this.old_password' toggleMask :feedback="false" />
      <span>{{this.$locales('write_your_old_password')}}</span>
    </div>
    <div class="input-section" :class="{'error' : this.errors.new_password || this.errors.new_password_valid}">
      <label for="password">
        {{ this.$locales('new_password') }}
      </label>
      <Password :placeholder="this.$locales('write_your_new_password')" v-model='this.new_password' toggleMask :feedback="false">
      </Password>
      <span v-if='this.errors.new_password'>{{this.$locales('write_your_new_password')}}</span>
      <span v-if='this.errors.new_password_valid'>
        * minimum 8 characters <br>
        * English small and capital letters<br>
        * at least one digit <br>
        * at least one character <br>
      </span>
    </div>
    <div class="button" @click='this.changePassword()'>
      <div>
        {{ this.$locales('change_password') }}
      </div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
  </div>
</template>

<script>
import { changePassword } from "@/services/index.js";
import Password from 'primevue/password';
import Divider from 'primevue/divider';
export default {
  name: "ProfileSettings",
  data(){
    return {
      errors: {
        new_password: false,
        old_password: false,
        new_password_valid: false,
      },
      locale: "fi",
      new_password: "",
      old_password: "",
    }
  },
  components:{
    Password,
    Divider
  },
  created(){
    this.locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : 'fi';
  },
  methods:{
    validatePassword(password) {
      if (password.length < 8) {
          return false;
      }

      var hasLowerCase = /[a-z]/.test(password);
      var hasUpperCase = /[A-Z]/.test(password);
      if (!hasLowerCase || !hasUpperCase) {
          return false;
      }

      var hasDigit = /\d/.test(password);
      if (!hasDigit) {
          return false;
      }

      var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      if (!hasSpecialChar) {
          return false;
      }

      return true;
    },
    setLocales(language){
      localStorage.setItem('locale', language);
      location.reload()
    },
    async changePassword(){
      console.log('test');
      if (this.old_password == "") {
        this.errors.old_password = true;
        return;
      }

      if (this.new_password == "") {
        this.errors.new_password = true;
        return;
      }

      if (!this.validatePassword(this.new_password)) {
        this.errors.new_password_valid = true;
        return;
      }

      try {
        const response = await changePassword({
          currentPassword: this.old_password,
          newPassword: this.new_password
        });

        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your password was changed!',
          showConfirmButton: false,
          timer: 3500
        });
      } catch (e) {
        console.log(e);

        this.$swal({
          position: 'top',
          icon: 'error',
          toast: true,
          title: 'Error!',
          showConfirmButton: false,
          timer: 1500
        });

        this.errors.new_password_valid = true;
      }

      this.new_password = "";
      this.old_password = "";
    }
  },
  watch: {
    new_password(){
      this.errors.new_password = false;
      this.errors.new_password_valid = false;
    },
    old_password(){
      this.errors.old_password = false;
    },
  }
}
</script>

<style lang="css" scoped>
</style>
