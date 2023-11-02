<template>
  <section class="main-block">
    <Header />
    <h1>
      Healthy eating. Personalized. Automated.
    </h1>
    <p>
      We plan, cook, and deliver all meals you need in a day. So you can stay on top of your health and reach 100% productivity.
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
        How Calori Works?
      </h3>
      <p>
        Healthy eating and weight management has never been this easy and delicious.
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
        {{ this.$locales('why_calori_block_title') }}
      </h3>
      <p>
        {{ this.$locales('why_calori_block_text') }}
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

    <div class="titlep_block mt-5" id='block'>
      <h3 class="block-title">
        {{ this.$locales('reviews_block_title') }}
      </h3>
      <p>
        {{ this.$locales('reviews_block_text') }}
      </p>
    </div>

    <ReviewSlider />

    <div class="titlep_block mt-5">
      <h3 class="block-title">
        1 Month with Calori
      </h3>
      <p>
        Here’s the difference you can make to your life with Calori.
      </p>
    </div>

    <PlusesBlock
      :pluses='
        [
          {
            title: "+50 hours",
            text: "saved on planning, shopping, cooking, and cleaning."
          },
          {
            title: "+150 meals",
            text: "for you to enjoy on your journey."
          },
          {
            title: "Up to 2 kg",
            text: "of weight lost without sacrificing on your lifestyle."
          },
          {
            title: "Infinity",
            text: "boost to energy and wellbeing."
          },
        ]
      '
    />



    <BlueTextBlock
      title='Don’t miss out!'
      text='Our next journey starts in January 2024. The seats are limited.'
      text-2='Just in time for your new-year resolutions! 🎆'
    />

    <div class="titlep_block mt-5">
      <h3 class="block-title">
        Get your meal plan
      </h3>
      <p>
        Here’s an average week with Calori. Quick recap: healthy and delicious!
      </p>
    </div>

    <TabsSlider />

    <p class="text-Description">
      With Calori, you’ll get balanced meals cooked and delivered according to your personalized plan. That’s 140+ unique meals in 1 month.
    </p>

    <div class="quiz-button mb-5" style="" @click='this.$router.push("/quiz")'>Get your plan</div>

    <List :data=
      "
        [
          {
            img: 7,
            text: 'Restaurant-level food made from local organic produce'
          },
          {
            img: 8,
            text: 'Sustainable packaging'
          },
          {
            img: 9,
            text: 'Green logistics powered by electricity and biofuel'
          },
          {
            img: 10,
            text: 'Minimal food waste'
          },
        ]
      "
    />

    <div class="titlep_block mt-5">
      <h3 class="block-title">
        Our Story
      </h3>
      <p>
        We started as a family business before growing into an international startup with reputable investors and experienced advisors.
      </p>
    </div>

    <p>
      Here’s a couple of words from the team behind Calori:
    </p>

    <StorySlider />

    <div class="titlep_block mt-5" style='margin-top: 100px !important;'>
      <h3 class="block-title mt-5">
        Sustainability Approach
      </h3>
      <p>
        Good for you, good for the planet.
      </p>
    </div>

    <p>Did you know that meal boxes reduce waste by 38% compared to home-cooked dinners?</p>

    <div class="titlep_block mt-5" style='margin-top: 100px !important;'>
      <h3 class="block-title mt-5">
        Still got questions?
      </h3>
      <p>
        We can’t wait to hear from you!
      </p>
    </div>

    <ContactForm />

  </div>
  <Footer />
</template>

<script>
import Card from "@/components/Blocks/Card.vue";
import Header from "@/components/Header.vue";
import List from "@/components/Blocks/List.vue";
import ListGrid from "@/components/Blocks/ListGrid.vue";
import ReviewSlider from "@/components/Blocks/ReviewSlider.vue";
import Footer from "@/components/Footer.vue";
import BlueTextBlock from "@/components/Blocks/BlueTextBlock.vue";
import TabsSlider from "@/components/Blocks/TabsSlider.vue";
import PlusesBlock from "@/components/Blocks/PlusesBlock.vue";
import StorySlider from "@/components/Blocks/StorySlider.vue";
import ContactForm from "@/components/Blocks/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    Card,
    Header,
    List,
    ListGrid,
    Footer,
    ReviewSlider,
    BlueTextBlock,
    TabsSlider,
    PlusesBlock,
    StorySlider,
    ContactForm
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
          if (targetBlock) {
            var targetBlockHeight = targetBlock.offsetHeight;
            var scrollPosition = window.scrollY;
            this.showButton = scrollPosition <= targetBlock.getBoundingClientRect().y;
          }
      },
  }
}
</script>

<style>
  .text-Description{
    margin-top: 90px;
  }
  .titlep_block:first-child{
    margin-top: 0;
  }
  .titlep_block{
    margin-top: 90px;
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
