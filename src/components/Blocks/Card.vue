<template>
  <div class="card card-1" :class="{'green': this.green}">
    <h3>
      {{this.title}}
    </h3>
    <img v-if='this.image == 1' src="@/assets/img/background/1.jpg" alt="">
    <img v-if='this.image == 2' src="@/assets/img/background/2.jpg" alt="">
    <img v-if='this.image == 3' src="@/assets/img/background/3.jpg" alt="">
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
