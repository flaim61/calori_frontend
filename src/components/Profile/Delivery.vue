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
      <input type="text" v-model='this.delivery.name'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('second_name')}}></label>
      <input type="text" v-model='this.delivery.lastname'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('phone')}}</label>
      <input type="text" v-model='this.delivery.phone'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('email')}}</label>
      <input type="text" v-model='this.delivery.email'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('city')}}</label>
      <input type="text" v-model='this.delivery.city'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('address')}}</label>
      <input type="text" v-model='this.delivery.address'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('post_code')}}</label>
      <input type="text"  v-model='this.delivery.post_code'>
    </div>
    <div class="input-section mb-3">
      <label>{{this.$locales('additional_information')}}</label>
      <input type="text" v-model='this.delivery.info'>
    </div>
    <div class="button text-white text-center" @click='saveDeliveryInfo'>
      {{ this.$locales('saveDeliveryInfo') }}
    </div>
  </div>
</template>

<script>
import RingDiagram from '@/components/Diagrams/RingDiagram.vue'
import { saveDeliveryInfo, getDeliveryInfo} from '@/services/index.js'
export default {
  name: "Plan",
  components: {
    RingDiagram,
  },
  data(){
    return {
      delivery: {
        name: "",
        lastname: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        post_code: "",
        info: "",
      },
      changing: false,
    }
  },
  async created(){
    this.delivery = await this.getDeliveryInfo();
  },
  methods: {
    async getDeliveryInfo(){
      const response = await getDeliveryInfo(this.delivery);
      return response.data;
    },
    async saveDeliveryInfo(){
      const response = await saveDeliveryInfo(this.delivery);
      this.changing = false;
    },
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
