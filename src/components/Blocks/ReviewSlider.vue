<template lang="html">
  <div class="cursor-pointer" >

  </div>
  <div class="slider review-slider">
    <div class="slide">
      <div class="slide-top d-flex justify-content-between">
        <div class="slide-top-left ">
          <img src="@/assets/img/customers/daniela.png" alt="">
        </div>
        <div class="slide-top-right">
          <h3 class="mt-4">Daniela Kenton</h3>
          <p>@danielakenton</p>

          <p class="review-text p-2">
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
        <div class="slide-top-right">
          <h3 class="mt-4">Nina Moritz</h3>
          <p>@ninamoritzz</p>

          <p class="review-text p-2">
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
        <div class="slide-top-right">
          <h3 class="mt-4">Eemil Kurhela</h3>
          <p>@eemilkurhela</p>

          <p class="review-text p-2">
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
        <div class="slide-top-right">
          <h3 class="mt-4">Salli Leppäkoski</h3>
          <p>@sallieerika</p>
          <p class="review-text p-2">
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
        <div class="slide-top-right">
          <h3 class="mt-4">Albert Minthant</h3>
          <p>@albertminthant</p>
          <p class="review-text p-2">
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
    setTimeout(function(){
      $('.review-slider').slick({
        dots: true,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 3000,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });
    }, 1)
    window.addEventListener('scroll', this.startSliderIfVisible)
    window.scrollBy(0, 10);
    window.scrollBy(0, -10);
  },
  data() {
    return {
      sliderInit: false
    }
  },
  methods: {
    startSliderIfVisible(){
      let menu = document.querySelector('.review-slider');

      if (!menu) {
        return;
      }

      let menuRect = menu.getBoundingClientRect()
      let isVisible = menuRect.top < window.innerHeight && menuRect.bottom >= 0;
      let alsoNowSlider = document.querySelector('.review-slider').classList.contains('slick-slider');
      if (isVisible && !alsoNowSlider) {
        setTimeout(function(){
          $('.review-slider').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                }
              },
            ]
          });
        }, 1)
      }
    },
  }
}
</script>

<style lang="css" scoped>

  .slide-top-right{
    width: 45%;
  }
  .slide-top-right>h3{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
  }
  .slide-top-right>p{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .review-text{
    border-radius: 8px;
    background: var(--Bg, #F0F5F8);
    display: block;
    z-index: 10;
    margin: 0 !important;
    color: var(--Black, #2C2D31) !important;
    font-family: Inter !important;
    font-size: 12px !important;
    font-style: normal ;
    font-weight: 400 ;
    line-height: 140% ;
    margin-left: -108% !important;
    margin-top: 51% !important;
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
    height: 252px;
    object-fit: cover;
    border-radius: 16px;
    width: 46vw;
    height: auto;
  }

  @media screen and (min-width: 1000px){
    .slide-top-left>img{
      width: 283px !important;
    }

    .review-text{
        font-size: 18px !important;
    }

    .slide-top-right>p{
        font-size: 15px;
    }

    .review-text{
      margin: 0 !important;
      background: none;
    }

    .slide-top-right, .slide-top-left{
      width: auto;
    }

    .slide-top-right>h3{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 16px;
    }

    .slide-top-right>p{
      color: var(--Accent, #00B467);
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 33.6px */
    }

    .slide-top-right>p + p{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 33.6px */
      padding-left: 0 !important;
    }

    .slide-top-right{
      padding-left: 32px;
    }

    .slide-top-left>img{
      height: 393px !important;
    }
  }
</style>
