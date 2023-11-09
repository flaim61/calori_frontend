<template>
  <section class="main-block">
    <Header />
    <iframe id="home-video" class="home-video" src="https://player.vimeo.com/video/882212749?background=1" frameborder="0" allow="autoplay; fullscreen" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    <!--<video autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false" id="home-video" class="home-video">
      <source src="@/assets/videos/Healthy-eating.mp4" type="video/mp4">
    </video>-->
    <h1 v-html="this.$locales('main_page_title')">
    </h1>
    <p>
      {{ this.$locales('main_page_text') }}
    </p>
    <Transition>
      <a href="#menu" v-if='!this.isPaid'>
        <div id='main-button' v-show='this.showButton' class="main-button">
          {{ this.$locales('individual_plan') }}
        </div>
      </a>
    </Transition>
  </section>

  <div class="main-page-content" id='how_it_work'>
    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('how_works') }}
      </h3>
    </div>
    <Card
      :title="this.$locales('how_works_1_title_home')"
      image="1"
      :text='this.$locales("how_works_1_text_home")'
    />
    <Card
      :title="this.$locales('how_works_2_title_home')"
      image="2"
      :text='this.$locales("how_works_2_text_home")'
    />
    <Card
      :title="this.$locales('how_works_3_title_home')"
      image="3"
      :text='this.$locales("how_works_3_text_home")'
    />

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
            img: 1,
            text: this.$locales('list_item_1_text_home')
          },
          {
            img: 6,
            text: this.$locales('list_item_2_text_home')
          },
          {
            img: 5,
            text: this.$locales('list_item_3_text_home')
          },
          {
            img: 4,
            text: this.$locales('list_item_4_text_home')
          },
          {
            img: 3,
            text: this.$locales('list_item_5_text_home')
          },
          {
            img: 2,
            text: this.$locales('list_item_6_text_home')
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

    <BlueTextBlock
      :title='this.$locales("blue_text_block_home_title")'
      :text='this.$locales("blue_text_block_home_text")'
      :text-2='this.$locales("blue_text_block_home_text_2")'
      :text-3='this.$locales("blue_text_block_home_text_3")'
    />

    <div class="titlep_block" id='menu'>
      <h3 class="block-title">
        {{this.$locales('menu_title_home')}}
      </h3>
      <p>
        {{this.$locales('menu_text_home')}}
      </p>
    </div>

    <TabsSlider />

    <p class="text-Description">
      {{this.$locales('menu_text_before_home')}}
    </p>

    <div class="quiz-button" style="" @click='this.$router.push("/quiz")' v-if='!this.isPaid'>{{this.$locales('get_plan_button')}}</div>
    <p>{{this.$locales('before_button_text')}}</p>

    <div class="blue-block pt-5 mt-5 pb-3">
      <div class="titlep_block  mt-0">
        <h3 class="block-title">
          {{this.$locales('month_with_calori_title')}}
        </h3>
        <p>
          {{this.$locales('month_with_calori_text')}}
        </p>
      </div>

      <PlusesBlock
        :pluses='
          [
            {
              title: this.$locales("pluses_title_1_home"),
              text: this.$locales("pluses_text_1_home")
            },
            {
              title: this.$locales("pluses_title_2_home"),
              text: this.$locales("pluses_text_2_home")
            },
            {
              title: this.$locales("pluses_title_3_home"),
              text: this.$locales("pluses_text_3_home")
            },
            {
              title: this.$locales("pluses_title_4_home"),
              text: this.$locales("pluses_text_4_home")
            },
          ]
        '
      />
    </div>

    <!--<div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('our_story_title') }}
      </h3>
      <p>
        {{ this.$locales('our_story_text') }}
      </p>
    </div>

    <p>
      {{this.$locales('our_story_text_2')}}:
    </p>

    <StorySlider />-->

    <div class="titlep_block" id='sustainability_approach'>
      <h3 class="block-title">
        {{ this.$locales('sustainability_approach_title') }}
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
            text: this.$locales('sustainability_approach_item_1'),
          },
          {
            img: 8,
            text: this.$locales('sustainability_approach_item_2'),
          },
          {
            img: 9,
            text: this.$locales('sustainability_approach_item_3'),
          },
          {
            img: 10,
            text: this.$locales('sustainability_approach_item_4'),
          },
        ]
      "
    />

    <p>{{this.$locales('sustainability_approach_before_text')}}</p>

    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('contact_form_title') }}
      </h3>
      <p>
        {{ this.$locales('contact_form_text') }}
      </p>
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
      isPaid: false,
    }
  },
  created: function() {
    this.isPaid = localStorage.getItem('isPaid') == 'true';
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
  .blue-block{
    padding-left: 15px;
    background: var(--Bg, #F0F5F8);
    margin-left: -15px;
    padding-right: 15px;
    width: calc(100% + 30px);
  }
</style>
