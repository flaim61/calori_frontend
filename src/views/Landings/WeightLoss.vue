<template>
  <section class="main-block">
    <Header />
    <iframe id="home-video" class="home-video" src="https://player.vimeo.com/video/882749171?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <!--<video  autoplay muted loop preload playsinline controls="false" id="home-videl" class="home-video">
      <source src="@/assets/videos/Weight-loss.mp4" type="video/mp4">
    </video>-->
    <h1>
      {{ this.$locales('WeightLoss_title') }}
    </h1>
    <p>
      {{ this.$locales('WeightLoss_text') }}
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
        {{ this.$locales('l1_how_works') }}
      </h3>
    </div>
    <Card
      :title="this.$locales('WeightLoss_card_1_title')"
      video="1"
      :text="this.$locales('WeightLoss_card_1_text')"
    />
    <Card
      :title="this.$locales('WeightLoss_card_2_title')"
      video="2"
      :text="this.$locales('WeightLoss_card_2_text')"
    />
    <Card
      :title="this.$locales('WeightLoss_card_3_title')"
      video="3"
      :text="this.$locales('WeightLoss_card_3_text')"
    />
    <Card
      :title="this.$locales('WeightLoss_card_4_title')"
      video="4"
      :text="this.$locales('WeightLoss_card_4_text')"
    />

    <Card
      :title="this.$locales('WeightLoss_card_5_title')"
      video="5"
      :text="this.$locales('WeightLoss_card_5_text')"
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
            img: 12,
            text: this.$locales('WeightLoss_list_item_1')
          },
          {
            img: 1,
            text: this.$locales('WeightLoss_list_item_2')
          },
          {
            img: 5,
            text: this.$locales('WeightLoss_list_item_3')
          },
          {
            img: 13,
            text: this.$locales('WeightLoss_list_item_4')
          },
          {
            img: 14,
            text: this.$locales('WeightLoss_list_item_5')
          },
          {
            img: 15,
            text: this.$locales('WeightLoss_list_item_6')
          },
          {
            img: 2,
            text: this.$locales('WeightLoss_list_item_7')
          },
        ]
      "
    />

    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('reviews_block_title') }}
      </h3>
      <p>
        {{this.$locales('reviews_block_text')}}
      </p>
    </div>

    <ReviewSlider />

    <BlueTextBlock
      :title='this.$locales("weight_blue_text_block_home_title")'
      :text='this.$locales("weight_blue_text_block_home_text")'
      :text-2='this.$locales("weight_blue_text_block_home_text_2")'
      :text-3='this.$locales("weight_blue_text_block_home_text_3")'
    />

    <div class="titlep_block"   id='menu'>
      <h3 class="block-title">
        {{ this.$locales('menu_title_home')}}
      </h3>
      <p>
        {{ this.$locales('menu_text_home') }}
      </p>
    </div>

    <TabsSlider />

    <p class="text-Description">
      {{ this.$locales('menu_text_before_home') }}
    </p>

    <div v-if='!this.isPaid' class="quiz-button" style="" @click='this.$router.push("/quiz")'>{{ this.$locales('get_plan_button') }} </div>
    <p> {{this.$locales('WeightLoss_before_button') }}</p>

    <div class="blue-block pt-5 mt-5 pb-3">
      <div class="titlep_block  mt-0">
        <h3 class="block-title">
          {{ this.$locales('HealthyEating_five_months') }}
        </h3>
        <p>
          {{ this.$locales('month_with_calori_text') }}
        </p>
      </div>

      <PlusesBlock
        :pluses="
        [
          {
            title: this.$locales('HealthyEating_plus_1_title'),
            text: this.$locales('WeightLoss_plus_1_text'),
          },
          {
            title: this.$locales('WeightLoss_plus_2_title'),
            text: this.$locales('WeightLoss_plus_2_text'),
          },
          {
            title: this.$locales('HealthyEating_plus_3_title'),
            text: this.$locales('WeightLoss_plus_3_text'),
          },
          {
            title: this.$locales('WeightLoss_plus_4_title'),
            text: this.$locales('WeightLoss_plus_4_text'),
          },
        ]
        "
      />
    </div>


    <!--<div class="titlep_block">
      <h3 class="block-title">
        Expert's opinion
      </h3>
    </div>

    <p>
      Here’s a couple of words from the team behind Calori:
    </p>

    <StorySlider />-->

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
        {{ this.$locales('contact_form_title') }}
      </h3>
      <p>
        {{ this.$locales('contact_form_text_weight') }}
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
      isPaid: false,
      targetBlockId: "block",
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
</style>
