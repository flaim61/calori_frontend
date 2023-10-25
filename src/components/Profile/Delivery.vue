<template lang="html">
  <h2 v-if='!this.changing'>
    Delivery days <span class="green-text">Monday and Thursday</span>
  </h2>
  <h2 v-if='!this.changing'>
    Time interval <span class="green-text">17:00 - 21:00</span>
  </h2>

  <div class="card-profile card" v-if='!this.changing'>
    <div class="card-top d-flex">
      <h2>Information delivery</h2>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <ul>
          <li>First name: <span>{{this.name}}</span></li>
          <li>Second name: <span>{{this.lastname}}</span></li>
          <li>Phone: <span>{{this.phone}}</span></li>
          <li>E-mail: <span>{{this.email}}</span></li>
          <li>City: <span>{{this.city}}</span></li>
          <li>Address: <span>{{this.address}}</span></li>
          <li>Post code: <span>{{this.post_code}}</span></li>
          <li>Additional information: <span>{{this.info}}</span></li>
        </ul>
      </div>
    </div>
    <div class="button grey-button d-flex justify-content-center text-white" @click='this.changing = true'>
      <img src="@/assets/img/icon/edit-contained.svg" alt="" class="mr-3"> Edit information
    </div>
  </div>
  <div class="card-profile card" v-else>
    <div class="input-section mb-3">
      <label for="email">First name</label>
      <input type="text" v-model='this.name'>
    </div>
    <div class="input-section mb-3">
      <label for="email">Second name</label>
      <input type="text" v-model='this.lastname'>
    </div>
    <div class="input-section mb-3">
      <label for="email">Phone</label>
      <input type="text" v-model='this.phone'>
    </div>
    <div class="input-section mb-3">
      <label for="email">E-mail</label>
      <input type="text" v-model='this.email'>
    </div>
    <div class="input-section mb-3">
      <label for="email">City</label>
      <input type="text" v-model='this.city'>
    </div>
    <div class="input-section mb-3">
      <label for="email">Address</label>
      <input type="text" v-model='this.address'>
    </div>
    <div class="input-section mb-3">
      <label for="email">Post code</label>
      <input type="text"  v-model='this.post_code'>
    </div>
    <div class="input-section mb-3">
      <label for="email">Additional information</label>
      <input type="text" v-model='this.info'>
    </div>
    <div class="button text-white text-center" @click='saveDeliveryInfo'>
      Save delivery information
    </div>
  </div>
</template>

<script>
import RingDiagram from '@/components/Diagrams/RingDiagram.vue'

export default {
  name: "Plan",
  components: {
    RingDiagram,
  },
  data(){
    return {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      post_code: "",
      info: "",
      changing: false,
    }
  },
  methods: {
    saveDeliveryInfo(){
      this.changing = false;
    }
  }
}
</script>

<style lang="css" scoped>
  .default-text{
    color: var(--Grey, #92979B);
    /* Text h3 */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  h2{
    color: var(--Black, #2C2D31);
    /* Text h2 med */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  li{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    margin-bottom: 4px;
  }
  .card>img, .card>div{
    margin-bottom: 0;
    margin-top: 0;
  }
  li>span{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
</style>
