<template lang="html">
  <div class="banner_block">
    <div class="banner_block_top">
      <p class="banner_block_header">{{ this.$locales('according_to_our_plan') }},</p>
      <span class="d-none">
        {{ finish_date = new Date(this.createdApplication.personalSlimmingPlan.finishDate) }}
      </span>
      <p class="banner_block_header_text">
        {{ this.$locales('you_will_lose') }}
        {{ this.createdApplication.personalSlimmingPlan.totalBurned }} kg from {{finish_date.getDate()}}.{{finish_date.getMonth()+1}}.{{ finish_date.getFullYear() }}</p>
    </div>
    <span class="d-none">
      {{ date = new Date(this.createdApplication.personalSlimmingPlan.startDate) }}
    </span>
    <h5> {{date.getDate()}}.{{date.getMonth()+1}}.{{ date.getFullYear() }} </h5>
    <div class="see_all" @click='this.plan_block_visibled = true'>
      <a href="#">
        {{ this.$locales('see_the_plan') }}
      </a>
    </div>
  </div>
  <div class="CheckBlock_content">
    <h3>{{ this.$locales('check1frase') }}:</h3>
    <ul class="CheckBlock_content_list">
      <li><img src="@/assets/img/icon/green-check.svg" alt=""> {{ this.$locales('check2frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check3frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check4frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check5frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check6frase') }}</li>
    </ul>
    <select class="select_checkout" v-model='this.priceId'>
      <option v-for='(item, index) in this.priceIds' :key='index' :value="item.priceId">
        {{item.name}}
      </option>
    </select>
    <div class="button mt-5" @click='this.createCheckoutSession()'>
      <div> {{ this.$locales('subscribe_now') }} </div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
  </div>

  <div class="plan_block p-3" v-show='this.plan_block_visibled'>
    <div class="plan_block_header d-flex justify-content-between">
      <h3>{{ this.$locales('see_the_plan') }}</h3>
      <a href="#" @click='this.plan_block_visibled = false'>
        <img src="@/assets/img/icon/close.svg" alt="">
      </a>
    </div>
    <p class="mt-3">
      Here’s the optimal amount of macronutrients that your body needs to reach your goal sustainably:
    </p>

    <ul class="mt-4" v-if='this.createdApplication'>

      <li>{{ this.createdApplication.dailyCalories }}<span class="ml-1">calories</span></li>
      <li>XXXX<span class="ml-1">of protein</span></li>
      <li>XXXX<span class="ml-1">of fats</span></li>
      <li>XXXX<span class="ml-1">of carbohydrates</span></li>
    </ul>

    <p class="mt-4">
      {{ this.$locales('check7frase') }}
    </p>
    <div class="plan_info_block p-2 mt-5">
      <p>
        {{ this.$locales('check8frase') }}
      </p>
      <ul class="plan_info_block_ul">
        <li class="mt-3"><span>{{ this.$locales('gender') }}</span> {{ this.createdApplication.genderId }}</li>
        <li class="mt-2"><span>{{ this.$locales('age') }}</span>  {{ this.createdApplication.age }}</li>
        <li class="mt-2"><span>{{ this.$locales('height') }}</span> {{ this.createdApplication.height }}</li>
        <li class="mt-2"><span>{{ this.$locales('weight') }}</span> {{ this.createdApplication.personalSlimmingPlan.currentWeight }}</li>
        <li class="mt-2"><span>{{ this.$locales('activity') }}</span> {{ this.createdApplication.activityLevelId }}</li>
      </ul>
      <!--<div class="text-center p-2 edit-btn" @click='this.returnQuizBegin()'>
        {{ this.$locales('edit_information') }}
      </div>-->
    </div>
  </div>
</template>

<script>
import {createCheckoutSession} from "@/services/index.js"

export default {
  name: "CheckBlock",
  data(){
    return {
      plan_block_visibled: false,
      priceId: "price_1O7hQCHNRk8vDVhuTqLeBqO6",
      priceIds: [
        {
          priceId: "price_1O7hQCHNRk8vDVhuTqLeBqO6",
          name: "test1",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "test2",
        },
      ]
    }
  },
  props: [
    'plan',
    'createdApplication',
    'returnQuizBegin',
  ],
  methods: {
    async createCheckoutSession(){
      const response = await createCheckoutSession({
        "priceId": this.priceId
      });

      window.open(response.data.sessionUrl);
    }
  }
}
</script>

<style lang="css" scoped>
  .select_checkout{
    width: 100%;
    border: none;
    height: 40px;
    margin-top: 30px;
    padding-left: 10px;
  }
  .edit-btn{
    border-radius: 10px;
    border: 1px solid var(--Grey, #92979B);
    background: var(--White, #FFF);
  }
  .plan_info_block{
    border-radius: 10px;
    background: var(--Bg, #F0F5F8);
  }
  li{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 14px */
  }
  li>span{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 14px */
  }
  .plan_block{
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
  }
  .price{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
    text-align: center;
    margin-top: 36px;
  }
  .desc{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    text-align: center;
  }
  .CheckBlock_content_list{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 16px;
    padding-right: 16px;
  }
  .CheckBlock_content>h3{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .see_all>a{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none;
  }
  .banner_block>h5{
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 33px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .banner_block{
    margin-bottom: 32px;
    margin-top: 8px;
    border-radius: 10px;
    background-image: url('@/assets/img/background/application-background.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 16px;
    height: 211px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .banner_block_header{
    color: var(--Grey, #92979B);
    /* Text h4 bold */
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  .banner_block_header_text{
    color: var(--White, #FFF);
    /* Text h3 med */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .button_section{
    position: fixed;
    bottom: 21px;
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 20px);
    max-width: 580px;
  }
</style>
