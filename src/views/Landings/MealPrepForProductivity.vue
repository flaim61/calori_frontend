<template>
  <section class="main-block">
    <Header />
    <iframe v-if='this.windowWidth < 700' id="home-video" class="home-video" src="https://player.vimeo.com/video/882343345?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <video v-if='this.windowWidth > 700' autoplay muted loop preload playsinline controls="false"  id="home-videl" class="home-video">
      <source src="@/assets/videos/Meal-prep.mp4" type="video/mp4">
    </video>
    <h1>
      {{this.$locales('MealPrepForProductivity_title')}}
    </h1>
    <p>
      {{this.$locales('MealPrepForProductivity_text')}}
    </p>
    <Transition>
      <a href="#menu" v-if='!this.isPaid'>
        <div id='main-button' v-show='this.showButton' class="main-button">
          {{ this.$locales('individual_plan') }}
        </div>
      </a>
    </Transition>
  </section>

  <div class="main-page-content">
    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('MealPrepForProductivity_how_title') }}
      </h3>
      <p>
        {{ this.$locales('MealPrepForProductivity_how_text') }}
      </p>
    </div>
    <Card
      :title="this.$locales('MealPrepForProductivity_how_works_1_title')"
      image="6"
      :text="this.$locales('MealPrepForProductivity_how_works_1_text')"
    />
    <Card
      :title="this.$locales('MealPrepForProductivity_how_works_2_title')"
      image="9"
      :text="this.$locales('MealPrepForProductivity_how_works_2_text')"
    />
    <Card
      :title="this.$locales('MealPrepForProductivity_how_works_3_title')"
      image="7"
      :text="this.$locales('MealPrepForProductivity_how_works_3_text')"
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
            text: this.$locales('MealPrepForProductivity_list_item_1')
          },
          {
            img: 6,
            text: this.$locales('MealPrepForProductivity_list_item_2')
          },
          {
            img: 5,
            text: this.$locales('MealPrepForProductivity_list_item_3')
          },
          {
            img: 4,
            text: this.$locales('MealPrepForProductivity_list_item_4')
          },
          {
            img: 3,
            text: this.$locales('MealPrepForProductivity_list_item_5')
          },
          {
            img: 2,
            text: this.$locales('MealPrepForProductivity_list_item_6')
          },
        ]
      "
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

    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('MealPrepForProductivity_month_with_calori_title') }}
      </h3>
      <p>
        {{ this.$locales('MealPrepForProductivity_month_with_calori_text') }}
      </p>
    </div>

    <PlusesBlock
      :pluses='
        [
          {
            title: this.$locales("MealPrepForProductivity_pluses_title_1"),
            text: this.$locales("MealPrepForProductivity_pluses_text_1"),
          },
          {
            title: this.$locales("MealPrepForProductivity_pluses_title_2"),
            text: this.$locales("MealPrepForProductivity_pluses_text_2"),
          },
          {
            title: this.$locales("MealPrepForProductivity_pluses_title_3"),
            text: this.$locales("MealPrepForProductivity_pluses_text_3"),
          },
          {
            title: this.$locales("MealPrepForProductivity_pluses_title_4"),
            text: this.$locales("MealPrepForProductivity_pluses_text_4"),
          },
        ]
      '
    />



    <BlueTextBlock
      :title='this.$locales("meal_text_block_home_title")'
      :text='this.$locales("meal_text_block_home_text")'
    />

    <div class="titlep_block" id='menu'>
      <h3 class="block-title">
        {{ this.$locales('menu_title_home') }}
      </h3>
      <p>
        {{ this.$locales('menu_text_home') }}
      </p>
    </div>

    <TabsSlider />
    <p class="text-Description" v-html='this.$locales("menu_text_before_healthy123")'>
    </p>

    <div v-if='!this.isPaid' class="quiz-button" style="" @click='this.$router.push("/quiz")'>{{this.$locales('get_plan_button_prep')}}</div>
    <p> {{ this.$locales('before_button_text') }} </p>

    <div class="titlep_block" id='sustainability_approach'>
      <h3 class="block-title">
        {{this.$locales('sustainability_approach_title')}}
      </h3>
      <p>
        {{ this.$locales('sustainability_approach_text') }}
      </p>
    </div>


    <List :data=
      "
        [
          {
            img: 7,
            text: this.$locales('sustainability_approach_item_1')
          },
          {
            img: 8,
            text: this.$locales('sustainability_approach_item_2')
          },
          {
            img: 9,
            text: this.$locales('sustainability_approach_item_3')
          },
          {
            img: 10,
            text: this.$locales('sustainability_approach_item_4')
          },
        ]
      "
    />

    <p>{{this.$locales('sustainability_approach_before_text') }}</p>

    <div class="titlep_block">
      <h3 class="block-title">
        {{this.$locales('our_story_title')}}
      </h3>
      <p>
        {{ this.$locales('our_story_text_3') }}
      </p>
    </div>

    <CardWithSecretText id='our-story' :image='10' :text="this.$locales('our_story_main_text')" :secret_text="this.$locales('our_story_secret_text')"/>

    <!--<div class="titlep_block">
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

    <StorySlider />-->

    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('contact_form_title') }}
      </h3>
      <p>
        {{ this.$locales('contact_form_text') }}
      </p>
    </div>

    <ContactForm  id='contact'/>

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
import CardWithSecretText from "@/components/Blocks/CardWithSecretText.vue";

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
    ContactForm,
    CardWithSecretText,
  },
  data(){
    return {
      showButton: true,
      isPaid: false,
      targetBlockId: "block",
      windowWidth: window.innerWidth
    }
  },
  created: function() {
    this.isPaid = localStorage.getItem('isPaid') == 'true';
    window.addEventListener('resize', this.onResize);
    localStorage.setItem('main-page', this.$route.path)
  },
  methods: {
    onResize(){
      console.log(window.innerWidth)
      this.windowWidth = window.innerWidth
    }
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
    padding-top: 40vh;
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
