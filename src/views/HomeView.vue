<template>
  <section class="main-block">
    <Header />
    <h1>
      <span class="green-gradient">Helpoin</span>,
      herkullisin ja luotettavin
      <span class="purple-gradient">tapa</span>
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur. Dictumst diam faucibus faucibus egestas. Praesent morbi et sit ipsum felis odio mus nunc ultricies.
    </p>
    <div class="main-button">
      Individual plan
    </div>
  </section>
  <h3 class="block-title">
    How it works?
  </h3>
  <Card />
  <Card green='true'/>
  <Card />
</template>

<script>
import Card from "@/components/Blocks/Card.vue";
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Card,
    Header
  },
  data(){

  }
}
</script>

<style>
  .main-block{
    margin-bottom: 32px;
  }
  .block-title{
    text-align: center;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 400;
  }
</style>
