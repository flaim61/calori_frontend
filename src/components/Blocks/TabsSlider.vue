<template lang="html">
  <div class="TabsSlider mb-5">
    <div class="tab_nav  pb-5 pt-5">
      <div class="tab_nav_item" :class='{"active":this.active == "mon"}' @click='this.setActive("mon")'>
        {{ this.$locales('mon') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "tue"}' @click='this.setActive("tue")'>
        {{ this.$locales('tue') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "wed"}' @click='this.setActive("wed")'>
        {{ this.$locales('wed') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "thu"}' @click='this.setActive("thu")'>
        {{ this.$locales('thu') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "fri"}' @click='this.setActive("fri")'>
        {{ this.$locales('fri') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "sat"}' @click='this.setActive("sat")'>
        {{ this.$locales('sat') }}
      </div>
      <div class="tab_nav_item" :class='{"active":this.active == "sun"}' @click='this.setActive("sun")'>
        {{ this.$locales('sun') }}
      </div>
    </div>

    <!-- MON -->
    <div class="racion-slider" v-if='this.active == "mon"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title1</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title1</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title1</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title1</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- TUE -->
    <div class="racion-slider" v-if='this.active == "tue"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title2</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title2</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title2</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title2</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- WED -->
    <div class="racion-slider" v-if='this.active == "wed"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title3</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title3</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title3</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title3</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- THU -->
    <div class="racion-slider" v-if='this.active == "thu"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title4</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title4</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title4</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title4</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- FRI -->
    <div class="racion-slider" v-if='this.active == "fri"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title5</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title5</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title5</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title5</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- SAT -->
    <div class="racion-slider" v-if='this.active == "sat"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title6</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title6</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title6</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title6</h3>
        <p>Description</p>
      </div>
    </div>

    <!-- SUN -->
    <div class="racion-slider" v-if='this.active == "sun"'>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title7</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title7</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/foof2.jpeg" alt="">
        <h3>Title7</h3>
        <p>Description</p>
      </div>
      <div class="slide">
        <img class="mb-4" src="@/assets/img/examples/food.jpeg" alt="">
        <h3>Title7</h3>
        <p>Description</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabsSlider",
  data(){
    return {
      active: "mon",
    }
  },
  created(){
    setTimeout(function(){
      $('.racion-slider').slick({
        dots: true,
        arrows: false,
      });
    }, 1);
  },
  methods: {
    setActive(day){
      this.active = day;

      setTimeout(function(){
        $('.racion-slider').slick({
          dots: true,
          arrows: false,
        });
      }, 1);
    }
  }
}
</script>

<style lang="css" scoped>
  .slide>img{
    width: 100%;
    object-fit: contain;
    height: 187px;
  }
  .tab_nav_item.active{
    border-radius: 10px;
    background: var(--Accent, #00B467);
  }
  .tab_nav{
    overflow-x: auto;
    display: flex;
  }
  .tab_nav_item{
    cursor: pointer;
    margin-right: 8px;
    border-radius: 10px;
    background: #92979B;
    padding: 16px;
    padding-left: 20px;
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    padding-right: 20px;
  }
  .tab_nav::-webkit-scrollbar{
    width: 0px !important;
    height: 0px;
    display: none !important;
    background: transparent;
  }
</style>
