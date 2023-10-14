<template>
  <div class="card card-1">
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
  data(){

  }
}
</script>

<style>
  .card{
    padding: 16px
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
</style>
