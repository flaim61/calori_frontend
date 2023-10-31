<template lang="html">
  <div class="cursor-pointer">
    <img src="@/assets/img/icon/cursor-pointer.svg" alt="">
  </div>
  <div class="slider review-slider">
    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/examples/review-example.jpg" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Pia Alanko</h3>
          <p>@danielakenton</p>
        </div>
      </div>
      <p class="review-text ml-3 mr-3 p-2">
        Healthy eating and weight management has never been this easy and delicious.
      </p>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/examples/review-example.jpg" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Pia Alanko</h3>
          <p>@danielakenton</p>
        </div>
      </div>
      <p class="review-text ml-3 mr-3 p-2">
        Healthy eating and weight management has never been this easy and delicious.
      </p>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/examples/review-example.jpg" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Pia Alanko</h3>
          <p>@danielakenton</p>
        </div>
      </div>
      <p class="review-text ml-3 mr-3 p-2">
        Healthy eating and weight management has never been this easy and delicious.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "ReviewSlider",
  created(){
    $(document).ready(function(){
      $('.slider').slick({
        dots: true,
        arrows: false,
      });
    });
  },
  data() {
    return {
      sliderInit: false
    }
  }
}
</script>

<style lang="css" scoped>
  .review-text{
    border-radius: 8px;
    background: var(--Bg, #F0F5F8);
    margin-top: -77px;
    margin-bottom: 77px;
    width: calc(100vw - 74px);
    max-width: 550px;
    position: absolute;
    display: block;
    z-index: 10;
  }
  .slide-top-right>h3{
    color: var(--Black, #2C2D31);
    /* Text h2 med */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .slide-top-right>p{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .review-slider{
    margin-bottom: 80px;
  }
  .cursor-pointer{
    position: absolute;
    z-index: 25;
    right: 50px;
    margin-top: 100px;
  }
  .slide-top-left>img{
    height: 215px;
    object-fit: cover;
  }
</style>
