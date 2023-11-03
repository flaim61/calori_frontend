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
          <li> Full Name: <span>{{this.delivery.name}}</span></li>
          <li> {{this.$locales('phone')}}: <span>{{this.delivery.phone}}</span></li>
          <li> {{this.$locales('email')}}: <span>{{this.delivery.email}}</span></li>
          <li> {{this.$locales('city')}}: <span>{{this.delivery.city}}</span></li>
          <li> {{this.$locales('address')}} Line 1: <span>{{this.delivery.line1}}</span></li>
          <li> {{this.$locales('address')}} Line 2: <span>{{this.delivery.line2}}</span></li>
          <li> {{this.$locales('post_code')}}: <span>{{this.delivery.post_code}}</span></li>
        </ul>
      </div>
    </div>
    <div class="button grey-button d-flex justify-content-center text-white" @click='this.changing = true'>
      <img src="@/assets/img/icon/edit-contained.svg" alt="" class="mr-3"> {{this.$locales('edit_information')}}
    </div>
  </div>
  <div class="card-profile card" v-else>
    <div class="input-section mb-3" :class="{'error':this.errors.name}">
      <label>Full Name</label>
      <input type="text" v-model='this.delivery.name'>
      <span>Entry your name</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.phone}">
      <label>{{this.$locales('phone')}}</label>
      <input type="text" v-model='this.delivery.phone'>
      <span>Enter your phone</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.email}">
      <label>{{this.$locales('email')}}</label>
      <input type="text" v-model='this.delivery.email'>
      <span>Enter your email</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.city}">
      <label>{{this.$locales('city')}}</label>
      <input type="text" v-model='this.delivery.city'>
      <span>Enter yout city</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.line1}">
      <label>Adress Line 1</label>
      <input type="text" v-model='this.delivery.line1'>
      <span>Enter your adress line 1</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.line2}">
      <label>Adress Line 2</label>
      <input type="text" v-model='this.delivery.line2'>
      <span>Enter your adress line 2</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.state}">
      <label>State</label>
      <input type="text" v-model='this.delivery.state'>
      <span>Enter your adress state</span>
    </div>
    <div class="input-section mb-3" :class="{'error':this.errors.post_code}">
      <label>{{this.$locales('post_code')}}</label>
      <input type="text"  v-model='this.delivery.post_code'>
      <span>Enter your adress post code</span>
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
        phone: "",
        email: "",
        city: "",
        line1: "",
        line2: "",
        state: "",
        post_code: "",
      },
      errors:{
        name: false,
        phone: false,
        email: false,
        city: false,
        line1: false,
        line2: false,
        state: false,
        post_code: false,
      },
      changing: false,
    }
  },
  async created(){
    this.delivery = await this.getDeliveryInfo();
  },
  methods: {
    async getDeliveryInfo(){
      const response = await getDeliveryInfo();
      return response.data;
    },
    async saveDeliveryInfo(){
      let haveError = false;
      for (var p in this.errors) {
        if (this.delivery[p] == "") {
          this.errors[p] = true;
          haveError = true;
        }
      }

      if (haveError) {
        return;
      }

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
