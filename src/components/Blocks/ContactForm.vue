<template lang="html">
  <div class="ContactForm">
    <div class="input-section">
      <input type="text" v-model='this.form.phone' id='phone' placeholder="Your phone" autocomplete="off">
    </div>
    <div class="input-section">
      <input type="text" v-model='this.form.email' id='email' placeholder="Your Email" autocomplete="off">
    </div>
    <div class="input-section">
      <input type="text" v-model='this.form.message' id='message' placeholder="Your Message" autocomplete="off">
    </div>
    <div class="button" @click='sendMessage'>
      <div>{{ this.$locales('contact_us')}} </div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
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
      }
    }
  },
  methods: {
    async sendMessage(){
      const response = await sendContactForm(this.form);

      this.$swal({
        position: 'top-right',
        icon: 'success',
        toast: true,
        title: 'We have received your message and will contact you soon!',
        showConfirmButton: false,
        timer: 4500
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
