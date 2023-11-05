<template>
  <section class="main-block">
    <Header />
    <h1>
      {{ this.$locales('l2_main_page_title') }}
    </h1>
    <p>
      {{ this.$locales('l2_main_page_text') }}
    </p>
    <Transition>
      <div id='main-button' v-show='this.showButton' class="main-button" @click='this.$router.push("/quiz")'>
        {{ this.$locales('individual_plan') }}
      </div>
    </Transition>
  </section>

  <div class="main-page-content" id='how_it_work'>
    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('l2_how_works') }}
      </h3>
      <p>
        Calori is a meal-prep and delivery service with a twist ✨
      </p>
    </div>
    <Card
      title=""
      image="1"
      text='Staying on track and reaching your goals might be difficult.

            Planning, shopping, cooking, and cleaning takes tons of your time and energy.

            And after all, you’re still not sure if you’re eating right…'
    />

    <div class="titlep_block">
      <h3 class="block-title">
        But we got you covered 🙌
      </h3>
    </div>

    <Card
      image="2"
      text='Eating healthy can be easy, fun, and delicious.

We help you get the perfect balance of nutrients, save time, and keep you energized.'
    />

    <div class="titlep_block">
      <h3 class="block-title">
        But we got you covered 🙌
      </h3>
    </div>

    <Card
      title="1. Get your personal meal plan 🥗"
      image="3"
      text="Take a short quiz and find out exactly what your body needs. 
        Our team of professional nutritionists spent years crafting meal plans that combine healthy with tasty. And now, we made it accessible to you through Calori."
    />
    <Card
      title="2. Subscribe to meal deliveries 🧑‍🍳"
      image="3"
      text='Get all meals you need in a day delivered to your home.
          Our chefs turned complex plans into delicious meals - hitting the perfect balance between home-made and sporty feels. You can enjoy restaurant-level breakfast, lunch, dinner, and snacks everywhere you go.'
    />

    <Card
      title="3. Reach your goals with support 🧘‍🍳"
      image="3"
      text='Staying on track and finding motivation is never easy without a support system.
            That’s why we have experienced coaches who can track your progress, give actionable advice, and answer all your questions! '
    />
    

    <div class="titlep_block" id='why_calori'>
      <h3 class="block-title">
        Before Calori
      </h3>
      <p>
        It’s time to goodbye to the old ways that never worked for you.
      </p>
    </div>

    <List color="red" :data=
      "
        [
          {
            img: 1,
            text: 'Overwhelmed with meal planning'
          },
          {
            img: 2,
            text: 'Processed foods and waste'
          },
          {
            img: 3,
            text: 'Constant cravings and zero energy'
          },
          {
            img: 4,
            text: 'Counting calories and nutrients'
          },
          {
            img: 5,
            text: 'Stressing if you get the right nutrients'
          },
        ]
      "
    />

    <div class="titlep_block">
      <h3 class="block-title">
        After Calori
      </h3>
      <p>
        You can be confident in your health choices.
      </p>
    </div>

    <List color="green" :data=
      "
        [
          {
            img: 1,
            text: 'Delicious & healthy food planned for you'
          },
          {
            img: 2,
            text: 'Local produce and sustainable packaging'
          },
          {
            img: 3,
            text: 'Tons of energy and top productivity'
          },
          {
            img: 4,
            text: 'Saving time on what matters to you'
          },
          {
            img: 5,
            text: 'Confidence in your health and choices'
          },
        ]
      "
    />



    <div class="titlep_block" >
      <h3 class="block-title">
        {{ this.$locales('reviews_block_title') }}
      </h3>
      <p>
        {{ this.$locales('reviews_block_text') }}
      </p>
    </div>

    <ReviewSlider />

    <BlueTextBlock
      title='Wanna join along?'
      text='Our next journey starts in January 2024. '
      text2='The seats are limited - don’t miss on yours. '
      text3='Just in time for your new-year resolutions! '
    />

    <div class="titlep_block" id='menu'>
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

    <div class="quiz-button" style="" @click='this.$router.push("/quiz")'>Get your plan</div>
    <p>All meals with deliveries start from 168 eur / week.</p>

    <div class="titlep_block">
      <h3 class="block-title">
        5 months with Calori
      </h3>
      <p>
        Here’s the difference you can make to your life with Calori.
      </p>
    </div>

    <PlusesBlock
      :pluses='
        [
          {
            title: "Up to 10 kg",
            text: "of weight lost without sacrificing on your lifestyle."
          },
          {
            title: "+31 working day saved",
            text: "on planning, shopping, cooking, and cleaning."
          },
          {
            title: "Total transformation",
            text: "to your energy, health, and wellbeing."
          },
          {
            title: "Open new doors",
            text: "and start new chapter of your life!"
          },
        ]
      '
    />

    <div class="titlep_block">
      <h3 class="block-title">
        Expert's opinion
      </h3>
    </div>

    <p>
      Here’s a couple of words from the team behind Calori:
    </p>

    <StorySlider />

    <div class="titlep_block" id='sustainability_approach'>
      <h3 class="block-title">
        Sustainability Approach
      </h3>
      <p>
        Good for you, good for the planet.
      </p>
    </div>


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

    <p>Did you know that meal boxes reduce waste by 38% compared to home-cooked dinners?</p>

    <div class="titlep_block">
      <h3 class="block-title">
        Still got questions?
      </h3>
    </div>
    <div class="d-flex mb-5">
      <img class='mr-3 rounded' style='object-fit:cover;' src="@/assets/img/examples/review-example-2.jpeg" alt="">
      <div class="">
        <p>
          Hi, my name is Vadim. I’m a Head Coach at Calori. I have 8 years of experience as a personal trainer.
        </p>
        <p>
          Always in touch, I’ll answer all your questions about nutrition, delivery or other aspects of using Calori.
        </p>
      </div>
    </div>
    <ContactForm id='contact'/>

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
  name: "HealthyEating",
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
  },
  methods: {
  }
}
</script>

<style>
  .text-Description{
    margin-top: 90px;
  }
  .titlep_block{
    margin-top: 64px;
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
