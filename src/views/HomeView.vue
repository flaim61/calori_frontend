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
    <Transition>
      <div id='main-button' v-show='this.showButton' class="main-button" @click='this.$router.push("/quiz")'>
        Individual plan
      </div>
    </Transition>
  </section>
  <h3 class="block-title">
    How it works?
  </h3>
  <Card />
  <Card green='true'/>
  <Card/>
  <List />
  <ListGrid />
  <Review id='block'/>
  <Review2 />
  <Footer />
</template>

<script>
import Card from "@/components/Blocks/Card.vue";
import Header from "@/components/Header.vue";
import List from "@/components/Blocks/List.vue";
import ListGrid from "@/components/Blocks/ListGrid.vue";
import Review from "@/components/Blocks/Review.vue";
import Review2 from "@/components/Blocks/Review2.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Card,
    Header,
    List,
    ListGrid,
    Review,
    Review2,
    Footer,
  },
  data(){
    return {
      showButton: true,
      targetBlockId: "block",
    }
  },
  created: function() {
      window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
      handleScroll: function() {
          var targetBlock = document.getElementById(this.targetBlockId);
          var targetBlockHeight = targetBlock.offsetHeight;
          var scrollPosition = window.scrollY;
          this.showButton = scrollPosition <= targetBlock.getBoundingClientRect().y;
      }
  }
}
</script>

<style>
  .main-block{
    margin-bottom: 32px;
    cursor: pointer;
  }
  .block-title{
    text-align: center;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 400;
  }
</style>
