<template>
  <div class="card card-1" :class="{'green': this.green}">
    <h3>
      {{this.title}}
    </h3>
    <img v-if='this.image == 1' src="@/assets/img/howitwork/1.jpeg" alt="">
    <img v-if='this.image == 2' src="@/assets/img/howitwork/2.jpeg" alt="">
    <img v-if='this.image == 3' src="@/assets/img/howitwork/3.jpeg" alt="">
    <img v-if='this.image == 4' src="@/assets/img/howitwork/4.jpeg" alt="">
    <img v-if='this.image == 5' src="@/assets/img/howitwork/5.jpeg" alt="">
    <img v-if='this.image == 6' src="@/assets/img/howitwork/6.jpeg" alt="">
    <img v-if='this.image == 7' src="@/assets/img/howitwork/7.jpeg" alt="">
    <img v-if='this.image == 8' src="@/assets/img/howitwork/8.jpeg" alt="">
    <img v-if='this.image == 9' src="@/assets/img/howitwork/9.jpeg" alt="">
    <p>
      {{this.text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {

  },
  props: ['green', 'title', 'image', 'text'],
  data(){
    return {

    }
  },
  methods: {
  }
}
</script>

<style>
  .card>img{
    margin-top: 16px;
    margin-bottom: 16px;
  }
  h3, .card>div{
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
</style>
