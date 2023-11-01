<template lang="html">
  <h2 v-if='!this.changing'>
    Delivery days <span class="green-text">Monday and Thursday</span>
  </h2>
  <h2 v-if='!this.changing'>
    Time interval <span class="green-text">17:00 - 21:00</span>
  </h2>

  <div class="card-profile card" v-if='!this.changing'>
    <div class="card-top d-flex">
      <h2> {{ this.$locales('information_delivery') }} </h2>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <ul>
          <li> {{this.$locales('first_name')}}: <span>{{this.name}}</span></li>
          <li> {{this.$locales('second_name')}}: <span>{{this.lastname}}</span></li>
          <li> {{this.$locales('phone')}}: <span>{{this.phone}}</span></li>
          <li> {{this.$locales('email')}}: <span>{{this.email}}</span></li>
          <li> {{this.$locales('city')}}: <span>{{this.city}}</span></li>
          <li> {{this.$locales('address')}}: <span>{{this.address}}</span></li>
          <li> {{this.$locales('post_code')}}: <span>{{this.post_code}}</span></li>
          <li> {{this.$locales('additional_information')}}: <span>{{this.info}}</span></li>
        </ul>
      </div>
    </div>
    <div class="button grey-button d-flex justify-content-center text-white" @click='this.changing = true'>
      <img src="@/assets/img/icon/edit-contained.svg" alt="" class="mr-3"> {{this.$locales('edit_information')}}
    </div>
  </div>
  <div class="card-profile card" v-else>
    <div class="input-section mb-3">
      <label>{{this.$locales('first_name')}}</label>
      <input type="text" v-model='this.name'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('second_name')}}></label>
      <input type="text" v-model='this.lastname'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('phone')}}</label>
      <input type="text" v-model='this.phone'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('email')}}</label>
      <input type="text" v-model='this.email'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('city')}}</label>
      <input type="text" v-model='this.city'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('address')}}</label>
      <input type="text" v-model='this.address'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('post_code')}}</label>
      <input type="text"  v-model='this.post_code'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('additional_information')}}</label>
      <input type="text" v-model='this.info'>
    </div>
    <div class="button text-white text-center" @click='saveDeliveryInfo'>
      {{ this.$locales('saveDeliveryInfo') }}
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
