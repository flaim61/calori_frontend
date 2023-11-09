<template lang="html">
  <div class="ContactForm">
    <div class="input-section" :class="{'error':this.errors.phone}">
      <input type="text" v-model='this.form.phone' id='phone' :placeholder="this.$locales('your_phone')" autocomplete="off">
      <span>Please write your phone</span>
    </div>
    <div class="input-section" :class="{'error':this.errors.email}">
      <input type="text" v-model='this.form.email' id='email' :placeholder="this.$locales('your_email')" autocomplete="off">
      <span>Please write your email</span>
    </div>
    <div class="input-section" :class="{'error':this.errors.message}">
      <input type="text" v-model='this.form.message' id='message' :placeholder="this.$locales('your_message')" autocomplete="off">
      <span>Please write your message</span>
    </div>
    <div class="button d-flex justify-content-center" @click='sendMessage'>
      <div >{{ this.$locales('contact_us')}} </div>
    </div>
    <a href="/faq">
      <div class="button faq_button d-flex justify-content-center" v-if='this.$route.name != "faq"'>
        <div > FAQ </div>
      </div>
    </a>
  </div>
</template>

<script>
import { sendContactForm } from "@/services/index.js"

export default {
  name: "ContactForm",
  data(){
    return {
      form: {
        phone: "",
        email: "",
        message: "",
      },
      errors:{
        phone: false,
        email: false,
        message: false,
      }
    }
  },
  methods: {
    async sendMessage(){
      this.errors.phone = (this.form.phone == "")
      this.errors.email = (this.form.email == "")
      this.errors.message = (this.form.message == "")

      for (var p in this.errors) {
        if (this.errors[p]) {
          return;
        }
      }

      try {
        const response = await sendContactForm(this.form);
      } catch (e) {

        this.$swal({
          position: 'top-right',
          icon: 'error',
          toast: true,
          title: 'The entered data is incorrect',
          showConfirmButton: false,
          timer: 4500
        })

        return;
      }

      this.$swal({
        position: 'top-right',
        icon: 'success',
        toast: true,
        title: 'We have received your message and will contact you soon!',
        showConfirmButton: false,
        timer: 4500
      })

      for (var p in this.errors) {
        this.errors[p] = false;
        this.form = "";
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .faq_button{
    margin-top: 16px;
    border-radius: 10px;
    border: 2px solid var(--Grey, #92979B);
    background: var(--White, #FFF);
  }
  .faq_button>div{
    color: #92979B !important;
  }
</style>
