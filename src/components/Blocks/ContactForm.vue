<template lang="html">
  <div class="ContactForm">
    <div class="input-section">
      <input type="text" v-model='this.phone' id='phone' placeholder="Your phone" autocomplete="off">
    </div>
    <div class="input-section">
      <input type="text" v-model='this.email' id='email' placeholder="Your Email" autocomplete="off">
    </div>
    <div class="input-section">
      <input type="text" v-model='this.message' id='message' placeholder="Your Message" autocomplete="off">
    </div>
    <div class="button" @click='sendMessage'>
      <div>{{ this.$locales('contact_us')}} </div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data(){
    return {
      phone: "",
      email: "",
      message: "",
    }
  },
  methods: {
    sendMessage(){
      console.log('test');
      this.$swal({
        position: 'top-right',
        icon: 'success',
        toast: true,
        title: 'Ok',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
