<template lang="html">
  <div class="cursor-pointer">

  </div>
  <div class="slider review-slider">
    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/daniela.png" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Daniela Kenton</h3>
          <p>@danielakenton</p>

          <p class="review-text ml-3 mr-3 p-2">
            {{ this.$locales('review_daniela') }}
          </p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/nina.png" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Nina Moritz</h3>
          <p>@ninamoritzz</p>

          <p class="review-text ml-3 mr-3 p-2">
            {{ this.$locales('review_nina') }}
          </p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/eemli.png" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Eemil Kurhela</h3>
          <p>@eemilkurhela</p>

          <p class="review-text ml-3 mr-3 p-2">
            {{ this.$locales('review_eemil') }}
          </p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/salli.jpeg" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Salli Leppäkoski</h3>
          <p>@sallieerika</p>
          <p class="review-text ml-3 mr-3 p-2">
            {{ this.$locales('review_salli') }}
          </p>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/albert.jpeg" alt="">
        </div>
        <div class="slide-top-right w-50">
          <h3 class="mt-4">Albert Minthant</h3>
          <p>@albertminthant</p>
          <p class="review-text ml-3 mr-3 p-2">
            {{ this.$locales('review_albert') }}
          </p>
        </div>
      </div>
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
        autoplay: true,
        autoplaySpeed: 3000,
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
    display: block;
    z-index: 10;
    margin: 0 !important;
    color: var(--Black, #2C2D31) !important;
    font-family: Inter !important;
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 140% !important;
    margin-left: -80% !important;
    margin-top: 42% !important;
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
    border-radius: 16px;
    width: 150px;
  }
</style>
