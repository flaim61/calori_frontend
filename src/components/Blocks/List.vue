<template>
  <div class="">
    <div class="list-item" v-for='(li, index) in this.data' :key="index">
      <div class="list-image">
        <img v-if='li.img == 1' src="@/assets/img/icon/1.svg" alt="">
        <img v-if='li.img == 2' src="@/assets/img/icon/2.svg" alt="">
        <img v-if='li.img == 3' src="@/assets/img/icon/3.svg" alt="">
        <img v-if='li.img == 4' src="@/assets/img/icon/4.svg" alt="">
        <img v-if='li.img == 5' src="@/assets/img/icon/5.svg" alt="">
        <img v-if='li.img == 6' src="@/assets/img/icon/6.svg" alt="">
        <img v-if='li.img == 7' src="@/assets/img/icon/7.svg" alt="">
        <img v-if='li.img == 8' src="@/assets/img/icon/8.svg" alt="">
        <img v-if='li.img == 9' src="@/assets/img/icon/9.svg" alt="">
        <img v-if='li.img == 10' src="@/assets/img/icon/10.svg" alt="">
      </div>
      <div class="list-text">
        {{ li.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: [ 'data' ],
  data(){
    return {

    }
  }
}
</script>

<style>
  .list-item{
    display: flex;
    padding: 8px;
    border-radius: 8px;
    background: #F0F5F8;
    margin-bottom: 16px;
  }
  .list-image{
    margin-right: 20px;
  }
  .list-image>img{
    height: 100%;
    width: 100%;
  }
  .list-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
