<template lang="html">
  <div class="TabsSlider mb-5">
    <div class="tab_nav pb-4">
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
    <div class="racion-slider" v-if='this.active == "tue"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pn/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pn_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pn/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pn_2') }}</p>
      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pn/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pn_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pn/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pn_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pn/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pn_5') }}</p>

      </div>
    </div>

    <!-- TUE -->
    <div class="racion-slider" v-if='this.active == "mon"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vt/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vt_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vt/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vt_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vt/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vt_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vt/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vt_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vt/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vt_5') }}</p>

      </div>
    </div>

    <!-- WED -->
    <div class="racion-slider" v-if='this.active == "wed"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sr/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sr_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sr/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sr_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sr/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sr_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sr/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sr_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sr/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sr_5') }}</p>

      </div>
    </div>

    <!-- THU -->
    <div class="racion-slider" v-if='this.active == "thu"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/cht/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_cht_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/cht/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_cht_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/cht/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_cht_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/cht/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_cht_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/cht/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_cht_5') }}</p>

      </div>
    </div>

    <!-- FRI -->
    <div class="racion-slider" v-if='this.active == "fri"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pt/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pt_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pt/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pt_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pt/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pt_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pt/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pt_4') }}</p>


      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/pt/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_pt_5') }}</p>

      </div>
    </div>

    <!-- SAT -->
    <div class="racion-slider" v-if='this.active == "sat"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sb/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sb_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sb/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sb_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sb/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sb_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sb/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sb_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/sb/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_sb_5') }}</p>

      </div>
    </div>

    <!-- SUN -->
    <div class="racion-slider" v-if='this.active == "sun"'>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vs/1.png" alt="">
        </div>
        <h3>1 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vs_1') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vs/2.png" alt="">
        </div>
        <h3>2 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vs_2') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vs/3.png" alt="">
        </div>
        <h3>3 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vs_3') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vs/4.png" alt="">
        </div>
        <h3>4 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vs_4') }}</p>

      </div>
      <div class="slide">
        <div class="slide-img-block">
          <img class="mb-4" src="@/assets/img/menu/vs/5.png" alt="">
        </div>
        <h3>5 {{ this.$locales('meal') }}</h3>
        <p>{{ this.$locales('menu_vs_5') }}</p>

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
    window.addEventListener('scroll', this.scrollButtonHandler)
    window.addEventListener('scroll', this.startSliderIfVisible)
    window.scrollBy(0, 10);
  },
  methods: {
    startSliderIfVisible(){
      let menu = document.querySelector('.racion-slider');

      if (!menu) {
        return;
      }

      let menuRect = menu.getBoundingClientRect()
      let isVisible = menuRect.top < window.innerHeight && menuRect.bottom >= 0;
      let alsoNowSlider = document.querySelector('.racion-slider').classList.contains('slick-slider');
      if (isVisible && !alsoNowSlider) {
        $('.racion-slider').slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          dots: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                dots: true,
              }
            },
          ]
        });
      }
    },
    scrollButtonHandler(){
      let block1 = document.getElementById('main-button');
      let contactForm = document.getElementById('contact');
      let block2 = document.querySelector('.quiz-button');

      if (!(block1 && contactForm && block2)) {
        return;
      }

      let block2Rect = block2.getBoundingClientRect();
      let isVisible = block2Rect.top < window.innerHeight && block2Rect.bottom >= 0;

      let contactFormRect = contactForm.getBoundingClientRect();
      let isContactFormRectVisible = contactFormRect.top < window.innerHeight && contactFormRect.bottom >= 0;

      if (isVisible || isContactFormRectVisible) {
        block1.style.opacity = 0;
        setTimeout(function(){
          block1.style.display = 'none';
        }, 1000)
      } else {
        block1.style.opacity = 1;
        setTimeout(function(){
          block1.style.display = 'block';
        }, 1000)
      }
    },
    setActive(day){
      this.active = day;

      setTimeout(function(){
        $('.racion-slider').slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          dots: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                dots: true,
              }
            },
          ]
        });
      }, 1);
    }
  }
}
</script>

<style lang="css" scoped>
  .slide>h3 + p{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .slide>.slide-img-block>img{
    width: 100%;
    object-fit: contain;
    height: 187px;
  }
  .tab_nav_item.active{
    border-radius: 10px;
    color: white;
    background: var(--Accent, #00B467);
    border: 2px solid var(--Grey, #00B467);
  }
  .tab_nav{
    overflow-x: auto;
    display: flex;
  }
  .tab_nav_item{
    cursor: pointer;
    margin-right: 8px;
    border-radius: 10px;
    color: #92979B;
    border: 2px solid var(--Grey, #92979B);
    padding: 16px;
    padding-left: 20px;
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

  @media screen and (min-width: 1000px){
    .slide>.slide-img-block>img{
      height: 261px;
    }

    .slide>h3{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      text-align: center;
    }

    .slide>h3 + p{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
    }

    .tab_nav_item{
      padding: 16px;
      width: 160px;
      text-align: center;
      border-width: 4px;
      border-radius: 16px;
      margin-right: 24px;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 33.6px */
    }

    .tab_nav{
      margin-bottom: 40px;
    }
  }
</style>
