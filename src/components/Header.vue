<template>
  <Transition>
    <div class="mobile-menu" v-show='this.mobile_menu_showed || this.windowWidth > 1000'>
      <div class="mobile-menu-header">
        <div class="mobile-menu-title ">
          Menu {{this.windowWidth}}
        </div>
        <div class="mobile-menu-icon" @click='this.mobile_menu_showed = !this.mobile_menu_showed'>
          <img src="@/assets/img/icon/close.svg" alt="">
        </div>
      </div>

      <div class="menu-content" v-if='this.$store.state.landigsRoute.indexOf(this.$route.name) !== -1'>
        <a @click='this.mobile_menu_showed = false' href="#how_it_work" > {{ this.$locales('l1_how_works')  }} </a>
        <a @click='this.mobile_menu_showed = false' href="#why_calori" > {{ this.$locales('why_calori_block_title') }} </a>
        <a @click='this.mobile_menu_showed = false' href="#menu" > {{this.$locales('our_menu')}} </a>
        <a @click='this.mobile_menu_showed = false' href="#sustainability_approach" > {{ this.$locales('sustainability_approach_title') }} </a>
        <a @click='this.mobile_menu_showed = false' href="#contact" > {{ this.$locales('contact_us') }} </a>
        <a @click='this.$router.push("faq")' > FAQ </a>
        <a class="back-button" href="/login" >
            {{ this.$locales('sign_in') }}
        </a>
      </div>

      <a class="first-a" href="/login" >
        <div class="back-button personal">
          {{ this.$locales('sign_in') }}
        </div>
      </a>
    </div>
  </Transition>
  <div class="green-label" id='green-label'>
    {{this.$locales('green_label_text')}}
  </div>
  <header id='header'>
    <div class="menu-item ml-2" >
      <img class="arrow-back" @click='this.$router.go(-1)' v-if='this.$route.name == "faq"' src="@/assets/img/icon/arrow-left.svg" alt="">
      <img v-else src="@/assets/img/icon/burger.svg" @click='switchMenu'>
    </div>
    <div class="app-title d-flex flex-column justify-content-center" @click='goHome'>
      <img src="@/assets/img/calori.svg" alt="">
    </div>
    <div class="language-item">
      <div class="d-flex">
        <div class="mr-2" v-if='this.getLocales() == "fi" || !this.getLocales()'>
          <a href="#" class="text-dark" @click="setLocales('en')">EN</a>
        </div>
        <div class="mr-2" v-if='this.getLocales() == "en"'>
          <a href="#" class="text-dark" @click="setLocales('fi')">FI</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  components: {
  },
  data(){
    return {
      mobile_menu_showed: false,
      windowWidth: window.innerWidth
    };
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    handleScroll(){
      /*let greenLabelHeight = document.getElementById('green-label').offsetHeight;
      if (greenLabelHeight - window.pageYOffset >= 0) {
        document.getElementById('header').style.top = (greenLabelHeight - window.pageYOffset) + "px";
      }else{
        document.getElementById('header').style.top = 0 + "px";
      }*/
    },
    goHome(){
      let page = localStorage.getItem('main-page') ? localStorage.getItem('main-page') : "/";
      console.log(page)
      this.$router.push(page);
    },
    onResize(){
      console.log(window.innerWidth)
      this.windowWidth = window.innerWidth
    },
    switchMenu(){
      this.mobile_menu_showed = !this.mobile_menu_showed

      if (this.mobile_menu_showed) {
        document.getElementById('header').style.top = 0 + "px";
      }else{
        this.handleScroll()
        document.getElementById('header').style.top = '23px';
      }
    },
    setLocales(language){
      localStorage.setItem('locale', language);
      location.reload()
    },
    getLocales(){
      return localStorage.getItem('locale');
    }
  }
}
</script>

<style>
  .personal{
    width: 100% !important;
    text-align: center !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    margin-top: 16px !important;
    font-size: 16px !important;
    color: var(--Black, #2C2D31);
  }
  .arrow-back{
    height: 32px;
    margin-left: -5px;
  }
  .green-label{
    width: calc(100% + 32px);
    margin-left: -16px;
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    background: var(--Accent, #00B467);
    text-align: center;
    padding: 4px 8px;
  }
  .language-item-block{
    position: absolute;
    margin-top: 88px;
    margin-left: -105px;
    background: white;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .menu-item{
    cursor: pointer;
  }
  .mobile-menu{
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: #fff;
    left: 0;
    z-index: 501;
    padding: 16px;
  }
  .mobile-menu-header{
    display: flex;
    justify-content: space-between;
    display: flex;
    justify-content: space-between;
    color: #151515;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    width: 90%;
  }
  .mobile-menu-icon{
    height: 33px;
    margin-bottom: -7px;
  }
  .menu-content{
    margin-top: 30px;
    margin-left: -16px;
    margin-right: -16px;
  }
  .menu-content>a:first-child{
    border-top: none;
  }
  .menu-content>a {
    padding-left: 16px;
    color: #151515;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none;
    border-bottom: 1px solid #E4E9EF;
    padding-bottom: 16px;
    padding-top: 16px;
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
  }
  .menu-content{
    display: flex;
    flex-direction: column;
  }

  .menu-content>.back-button{
    display: none;
  }

  @media screen and (min-width: 1000px) {
      .menu-item{
        display: none;
      }

      .first-a{
        display: none;
      }

      .mobile-menu{
        position: static;
        display: block;
        width: auto;
        height: auto;
        padding: 0;
        background: none;
      }

      .mobile-menu-header{
        display: none;
      }

      .menu-content{
        margin: 0;
        display: flex;
        position: fixed;
        flex-direction: row;
        z-index: 600;
        background: none;
        left: 250px;
        justify-content: center;
        top: 54px;
      }

      .menu-content>a{
        border: none;
        padding: 0;
        color: var(--Black, #2C2D31);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        margin-right: 32px;
      }

      .menu-content>.back-button{
        right: 80px;
        position: fixed;
        margin-top: -10px;
        padding: 8px 16px;
        display: block;
        border-radius: 10px;
        border: 1px solid var(--Black, #2C2D31);
        background: var(--White, #FFF);
      }

      .green-label{
        color: var(--White, #FFF);
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }

      header{
        top: 32.2px;
        padding-top: 16px;
        padding-bottom: 16px;
      }
  }
</style>
