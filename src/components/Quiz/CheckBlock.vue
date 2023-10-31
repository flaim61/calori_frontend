<template lang="html">
  <div class="banner_block">
    <div class="banner_block_top">
      <p class="banner_block_header">According to our plan,</p>
      <span class="d-none">
        {{ finish_date = new Date(this.createdApplication.personalSlimmingPlan.finishDate) }}
      </span>
      <p class="banner_block_header_text">
        you will lose
        {{ this.createdApplication.personalSlimmingPlan.totalBurned }} kg from {{finish_date.getDate()}}.{{finish_date.getMonth()+1}}.{{ finish_date.getFullYear() }}</p>
    </div>
    <span class="d-none">
      {{ date = new Date(this.createdApplication.personalSlimmingPlan.startDate) }}
    </span>
    <h5> {{date.getDate()}}.{{date.getMonth()+1}}.{{ date.getFullYear() }} </h5>
    <div class="see_all" @click='this.plan_block_visibled = true'>
      <a href="#">See the plan</a>
    </div>
  </div>
  <div class="CheckBlock_content">
    <h3>You’ll get everything you need for guaranteed results:</h3>
    <ul class="CheckBlock_content_list">
      <li><img src="@/assets/img/icon/green-check.svg" alt="">5 healthy restaurant-level meals / day</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">Balanced and diverse nutrition to improve your health</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">Home deliveries 2 times / week</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">Guaranteed results with professional support</li>
      <li><img src="@/assets/img/icon/green-check.svg" alt="">Cancel at any time or pause during holidays</li>
    </ul>
    <div class="price">
      399 eur / 2 weeks
    </div>
    <div class="desc">28.5 eur per day</div>
    <div class="button_section">
      <div class="button" @click=''>
        <div>Subscribe now</div>
        <img src="@/assets/img/icon/button_arrow.svg">
      </div>
    </div>
  </div>

  <div class="plan_block p-3" v-show='this.plan_block_visibled'>
    <div class="plan_block_header d-flex justify-content-between">
      <h3>See the plan</h3>
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
      Our coaches will adjust your plan according to your progress.
    </p>
    <div class="plan_info_block p-2 mt-5">
      <p>
        This information is based on what you shared with us.
        Here’s the summary:
      </p>
      <ul class="plan_info_block_ul">
        <li class="mt-3"><span>Gender</span> {{ this.createdApplication.genderId }}</li>
        <li class="mt-2"><span>Age</span>  {{ this.createdApplication.age }}</li>
        <li class="mt-2"><span>Height</span> {{ this.createdApplication.height }}</li>
        <li class="mt-2"><span>Current weight</span> {{ this.createdApplication.personalSlimmingPlan.currentWeight }}</li>
        <li class="mt-2"><span>Activity level</span> {{ this.createdApplication.activityLevelId }}</li>
      </ul>
      <div class="text-center p-2 edit-btn" @click='this.returnQuizBegin()'>
        {{ this.$locales('edit_information') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBlock",
  data(){
    return {
      plan_block_visibled: false
    }
  },
  props: [
    'plan',
    'createdApplication',
    'returnQuizBegin',
  ],
}
</script>

<style lang="css" scoped>
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
    max-width: 600px;
  }
</style>
