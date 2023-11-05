<template lang="html">
  <div class="banner_block">
    <div class="banner_block_top">
      <p class="banner_block_header">By following your personal plan,</p>
      <span class="d-none">
        {{ finish_date = new Date(this.createdApplication.personalSlimmingPlan.finishDate) }}
      </span>
      <p class="banner_block_header_text">
        you can lose up to {{ this.createdApplication.weight - this.createdApplication.goal }} kg <br>
        between {{finish_date.getDate()}}.{{finish_date.getMonth()+1}}.{{ finish_date.getFullYear() }} and
      </p>
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
    <h3>Get everything you need:</h3>
    <ul class="CheckBlock_content_list">
      <li><img src="@/assets/img/icon/green-check.svg" alt=""> {{ this.$locales('check2frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check3frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check4frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check5frase') }}</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">{{ this.$locales('check6frase') }}</li>
    </ul>
    <h3 class="mt-4">Select payment frequency</h3>

    <v-select
      v-model="this.plan"
      :options="this.plans"
      :searchable="false"
      :clearable="false"
      label="name"
      >
      <template v-slot:option="option">
        <div class="">
          {{ option.name }}
        </div>
        <div class="">
          {{ option.price }} eur
        </div>
      </template>
    </v-select>
    <p class="after_button_text">28.5 eur per day</p>
    <div class="button createCheckoutSessionButton" @click='this.createCheckoutSession()'>
      <div> {{ this.$locales('subscribe_now') }} </div>
      <img src="@/assets/img/icon/button_arrow.svg">
    </div>
    <p>
      Pay now for the first period Start receiving deliveries from 8.1.2024
    </p>
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

      <li>{{ this.createdApplication.personalSlimmingPlan.caloriSlimmingPlan.calories }}<span class="ml-1">calories</span></li>
      <li>{{ this.createdApplication.personalSlimmingPlan.caloriSlimmingPlan.protein }} g.<span class="ml-1">of protein</span></li>
      <li>{{ this.createdApplication.personalSlimmingPlan.caloriSlimmingPlan.fats }} g.<span class="ml-1">of fats</span></li>
      <li>{{ this.createdApplication.personalSlimmingPlan.caloriSlimmingPlan.carbohydrates }} g.<span class="ml-1">of carbohydrates</span></li>
    </ul>

    <p class="mt-4">
      Our coaches will adjust your plan according to your progress.
    </p>
    <div class="plan_info_block p-2 mt-4">
      <p>
        This information is based on what you shared with us.
        Here’s the summary:
      </p>
      <ul class="plan_info_block_ul">
        <li class="mt-3"><span>{{ this.$locales('gender') }}</span> {{ this.createdApplication.genderId == 0 ? "Male" : "Female" }}</li>
        <li class="mt-2"><span>{{ this.$locales('age') }}</span>  {{ this.createdApplication.age }} years</li>
        <li class="mt-2"><span>{{ this.$locales('height') }}</span> {{ this.createdApplication.height }} cm</li>
        <li class="mt-2"><span>{{ this.$locales('weight') }}</span> {{ this.createdApplication.personalSlimmingPlan.currentWeight }} kg</li>
        <li class="mt-2" v-if='this.createdApplication.activityLevelId == 0'><span>{{ this.$locales('activity') }}</span> {{ this.$locales('activity_0') }}</li>
        <li class="mt-2" v-if='this.createdApplication.activityLevelId == 1'><span>{{ this.$locales('activity') }}</span> {{ this.$locales('activity_1') }}</li>
        <li class="mt-2" v-if='this.createdApplication.activityLevelId == 2'><span>{{ this.$locales('activity') }}</span> {{ this.$locales('activity_2') }}</li>
      </ul>
      <div class="text-center p-2 edit-btn" @click='this.returnQuizBegin()'>
        {{ this.$locales('edit_information') }}
      </div>
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
      plan: {
        priceId: "price_1O7hQCHNRk8vDVhuTqLeBqO6",
        name: "Every 2 weeks",
        price: "100",
      },
      plans: [
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 1 week",
          price: "100",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhuTqLeBqO6",
          name: "Every 2 weeks",
          price: "100",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 3 weeks",
          price: "300",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 4 weeks",
          price: "200",
        },
      ]
    }
  },
  props: [
    'plan',
    'createdApplication',
    'returnQuizBegin',
  ],
  created(){
    console.log(this.createdApplication)
  },
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
  .createCheckoutSessionButton{
    margin-top: 32px;
  }
  .createCheckoutSessionButton + p {
    margin-top: 4px;
    color: var(--Grey, #92979B);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .after_button_text{
    margin-top: 8px;
    color: var(--Accent, #00B467);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  .CheckBlock_content>h3{
    color: var(--Black, #2C2D31);
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 14px */
  }
  .select_checkout{
    width: 100%;
    border: none;
    height: 40px;
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
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    padding: 0px 16px;
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
    width: calc(100vw - 30px);
    max-width: 570px;
  }
</style>
