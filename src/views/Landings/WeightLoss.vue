<template>
  <section class="main-block">
    <Header />
    <h1>
      {{ this.$locales('l1_main_page_title') }}
    </h1>
    <p>
      {{ this.$locales('l1_main_page_text') }}
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
        {{ this.$locales('l1_how_works') }}
      </h3>
    </div>
    <Card
      title="Find out when you’ll hit your goal"
      image="1"
      text='Just answer a few short questions (it’ll take 3 mins max) and see when you’ll get to your target weight.'
    />
    <Card
      title="Let us do all the heavy lifting"
      image="2"
      text='Subscribe to our service and let us take care of all your stress related to eating, making progress, and reaching your goals.'
    />
    <Card
      title="Yummy food to your door"
      image="3"
      text='Get daily meals delivered to your doorstep twice a week. You’ll get 4-5 servings every day. No fuss! Just consistent, restaurant-level food.'
    />
    <Card
      title="Keep us in the loop"
      image="3"
      text='Shoot us quick 5-min updates once a week. We’ll cheer you up on on every step of the way!'
    />

    <Card
      title="Eat, enjoy, and slim down"
      image="3"
      text='Just relax, enjoy the grub, and watch the magic happen. Weight loss? You got this! No need to even hit the gym. Simple as that, right?'
    />

    <div class="titlep_block" id='block'>
      <h3 class="block-title">
        {{ this.$locales('reviews_block_title') }}
      </h3>
      <p>
        {{ this.$locales('reviews_block_text') }}
      </p>
    </div>

    <ReviewSlider />

    <div class="titlep_block" id='why_calori'>
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
            img: 12,
            text: 'Healthy weight loss: 2 kg per month'
          },
          {
            img: 1,
            text: 'Premium restaurant-level cuisine everywhere you go'
          },
          {
            img: 5,
            text: 'Personalized nutritional balance for improving your health and metabolism'
          },
          {
            img: 13,
            text: 'Support and weekly progress check from professional coaches'
          },
          {
            img: 14,
            text: 'Working out? Optional - it’s up to you'
          },
          {
            img: 15,
            text: 'Pause the meal subscription at any time'
          },
          {
            img: 2,
            text: 'Guaranteed results and excellent experience'
          },
        ]
      "
    />

    <div class="titlep_block">
      <h3 class="block-title">
        Our beloved customers
      </h3>
      <p>
        Our first group reached 70+ happy customers. Here’s what some of them say.
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
  name: "WeightLoss",
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
