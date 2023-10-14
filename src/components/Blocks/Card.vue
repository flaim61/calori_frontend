<template>
  <div class="card card-1" :class="{'green': this.green}">
    <h3>
      1 title
    </h3>
    <img src="@/assets/img/examples/1.jpeg" alt="">
    <p>
      Lorem ipsum dolor sit amet consectetur. Dictumst diam faucibus faucibus egestas.
    </p>
    <div>
      Date
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur.
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {

  },
  props: ['green'],
  data(){

  }
}
</script>

<style>
  .card{
    padding: 16px;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    margin-top: 15px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
  }
  .card>img, .card>div{
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
  .green{
    background: #D3FDE9;
  }
</style>
