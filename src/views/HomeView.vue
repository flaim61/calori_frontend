<template>
  <section class="main-block">
    <Header />
    <h1>
      {{ this.$locales('main_page_title') }}
    </h1>
    <p>
      {{ this.$locales('main_page_text') }}
    </p>
    <Transition>
      <div id='main-button' v-show='this.showButton' class="main-button" @click='this.$router.push("/quiz")'>
        {{ this.$locales('individual_plan') }}
      </div>
    </Transition>
  </section>

  <div class="main-page-content">
    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('how_works') }}
      </h3>
      <p>
        {{ this.$locales('how_works_text') }}
      </p>
    </div>
    <Card
      title="1. Get your personalized meal plan for balanced eating"
      image="1"
      text='Take a short quiz and find out exactly what you need to stay healthy and productive according to our team of professional nutritionists and coaches.'
    />
    <Card
      title="2. Subscribe to delicious, healthy meals delivered to your home"
      image="2"
      text='Tired of cooking or re-ordering? Let us take care of everything: from balanced nutrition to chef-crafted meals and home deliveries.'
    />
    <Card
      title="3. Reach your goals while getting support from our coaches"
      image="3"
      text='All you have to do is enjoy! If you need actionable advice and motivation boosts, our coaches will support you on your journey.'
    />

    <div class="titlep_block">
      <h3 class="block-title">
        Why Calori?
      </h3>
      <p>
        Say goodbye to the old ways that never worked for you.
      </p>
    </div>

    <List :data=
      "
        [
          {
            img: 1,
            text: 'Premium restaurant-level cuisine everywhere you go'
          },
          {
            img: 2,
            text: 'Made by professional nutritionists, coaches, and chefs'
          },
          {
            img: 3,
            text: 'Perfect nutritional balance for improving your health and metabolism'
          },
          {
            img: 4,
            text: 'Optimal calorie deficit for burning fat without losing productivity'
          },
          {
            img: 5,
            text: 'Less waste, eco-friendly packaging, and green logistics'
          },
          {
            img: 6,
            text: 'Guaranteed result and excellent experience'
          },
        ]
      "
    />

    <div class="titlep_block">
      <h3 class="block-title">
        Our beloved customers
      </h3>
      <p>
        Our first group grew to +70 happy customers. Here’s what some of them say
      </p>
    </div>

    <Review id='block'/>
    <Review2 />
  </div>
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
      },
  }
}
</script>

<style>
  .titlep_block{
    margin-bottom: 32px;
  }
  .titlep_block>h3{
    margin-bottom: 0;
    text-align: left;
  }
  .titlep_block>p{
    text-align: left;
  }
  .main-page-content{
    padding-left: 15px;
    padding-right: 15px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  h1{
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
    padding-top: 215px;
  }
  .main-block>p{
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    margin-top: 8px;
  }
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
