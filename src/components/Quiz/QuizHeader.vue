<template>
  <div class="quiz_header">
    <div class="quiz_header_navigation">
      <div class="quiz_header_img" @click='goBack()'>
        <img src="@/assets/img/icon/return.svg" alt="">
      </div>
      <div class="quiz_header_text">
        {{ this.$locales('quiz2fraze') }}
      </div>
      <div @click='goBackInHome()'>
        <img src="@/assets/img/icon/close1.svg" alt="">
      </div>
    </div>
    <div class="quiz_header_step_counter" v-if='this.step != 9'>
      <div class="item" :class="{ active: Math.floor(this.step) >= 1 }"><span>&#10004;&#65039;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 2 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 3 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 4 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 5 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 6 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 7 }"><span>&#10004;</span></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 8 }"><span>&#10004;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizHeader",
  props: ['goBack', 'step'],
  methods:{
    goBackInHome(){
      let page = localStorage.getItem('main-page') ? localStorage.getItem('main-page') : "/";
      console.log(page)
      this.$router.push(page);
    }
  }
}
</script>

<style>
  .quiz_header_step_counter{
    display: flex;
    justify-content: space-between;
  }
  .quiz_header_step_counter>.item>span{
    display: none;
  }
  .quiz_header_step_counter>.item.active{
    display: block;
    background: #01b467;
  }
  .quiz_header_step_counter>.item{
    width: 85%;
    border-radius: 100%;
    border: 2px solid #92979b;
    height: 5px;
    width: 24px;
    height: 24px;
  }
  .quiz{
    padding: 10px 16px;
    background: var(--Bg, #F0F5F8);
  }
  .quiz_header_navigation{
    display: flex;
    justify-content: space-between;
  }
  .quiz_header_text{
    color: #303030;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .quiz_header_step_counter{
    margin-top: 15px;
  }
  .item.active{
    border-color: #01b467;
  }
</style>
