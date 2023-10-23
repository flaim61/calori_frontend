<template>
  <div class="quiz_header">
    <div class="quiz_header_navigation">
      <div class="quiz_header_img" @click='goBack()'>
        <img src="@/assets/img/icon/return.svg" alt="">
      </div>
      <div class="quiz_header_text">
        Luo henkilökohtainen ruokasuunnitelma
      </div>
    </div>
    <div class="quiz_header_step_counter">
      <div class="item" :class="{ active: Math.floor(this.step) >= 1 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 2 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 3 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 4 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 5 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 6 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 7 }"></div>
      <div class="item" :class="{ active: Math.floor(this.step) >= 8 }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizHeader",
  props: ['goBack', 'step'],
}
</script>

<style>
  .quiz_header_step_counter{
    display: flex;
    justify-content: space-between;
  }
  .quiz_header_step_counter>.item{
    border-radius: 2px;
    border: 1px solid #303030;
  }
  .quiz{
    padding: 22px 10px;
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
  }
  .quiz_header_step_counter{
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .quiz_header_step_counter>.item{
    width: 85%;
    border-radius: 2px;
    border: 1px solid #303030;
    height: 5px;
  }
  .item.active{
    background: #303030;
  }
</style>
