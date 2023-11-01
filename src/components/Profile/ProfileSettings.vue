<template lang="html">
  <div class="card card-profile">
    <h3 class="mb-4">
      Language
    </h3>
    <div class="button text-white justify-content-center" @click="this.setLocales('en')">
      English
    </div>
    <div class="grey button text-white justify-content-center mt-3" @click="this.setLocales('fi')">
      Finland
    </div>
  </div>
  <div class="card card-profile mt-4">
    <div class="input-section" :class="{'error' : this.errors.old_password}">
      <label for="password">Old password</label>
      <input type="password" v-model='this.old_password' placeholder="Your old password" autocomplete="off">
      <span>Write your old password</span>
    </div>
    <div class="input-section" :class="{'error' : this.errors.new_password || this.errors.new_password_valid}">
      <label for="password">New Password</label>
      <input type="password" v-model='this.new_password' placeholder="Your new password" autocomplete="off">
      <span v-if='this.errors.new_password'>Write your new password</span>
      <span v-if='this.errors.new_password_valid'>
        * minimum 8 characters <br>
        * English small and capital letters<br>
        * at least one digit <br>
        * at least one character <br>
      </span>
    </div>
    <div class="button" @click='this.changePassword()'>
      <div>Change Password</div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
  </div>
</template>

<script>
import { changePassword } from "@/services/index.js";

export default {
  name: "ProfileSettings",
  data(){
    return {
      errors: {
        new_password: false,
        old_password: false,
        new_password_valid: false,
      },
      new_password: "",
      old_password: "",
    }
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
