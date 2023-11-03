<template>
  <Transition>
    <div class="mobile-menu" v-show='this.mobile_menu_showed'>
      <div class="mobile-menu-header">
        <div class="mobile-menu-title ">
          Menu
        </div>
        <div class="mobile-menu-icon" @click='this.mobile_menu_showed = !this.mobile_menu_showed'>
          <img src="@/assets/img/icon/close.svg" alt="">
        </div>
      </div>
      <div class="menu-content">
        <a href="/login" > {{ this.$locales('sign_in') }} </a>
        <a @click='this.mobile_menu_showed = false' href="#how_it_work" > How It Work </a>
        <a @click='this.mobile_menu_showed = false' href="#why_calori" > Why Calory? </a>
        <a @click='this.mobile_menu_showed = false' href="#menu" > Our Menu </a>
        <a @click='this.mobile_menu_showed = false' href="#sustainability_approach" > Sustainability Approach </a>
        <a @click='this.mobile_menu_showed = false' href="#contact" > Contact </a>
      </div>
    </div>
  </Transition>
  <div class="green-label" id='green-label'>
    Next wave in Helsinki, Espoo, Vantaa from 8.1.2024
  </div>
  <header id='header'>
    <div class="menu-item ml-2" @click='switchMenu'>
      <img src="@/assets/img/icon/burger.svg" alt="">
    </div>
    <div class="app-title d-flex flex-column justify-content-center">
      <img src="@/assets/img/calori.svg" alt="">
    </div>
    <div class="language-item">
      <div class="d-flex">
        <div class="mr-2" v-if='this.getLocales() == "fi"'>
          <a href="#" class="text-dark" @click="setLocales('en')">En</a>
        </div>
        <div class="mr-2" v-else>
          <a href="#" class="text-dark" @click="setLocales('fi')">Fi</a>
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
    };
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(){
      let greenLabelHeight = document.getElementById('green-label').offsetHeight;
      if (greenLabelHeight - window.pageYOffset >= 0) {
        document.getElementById('header').style.top = (greenLabelHeight - window.pageYOffset) + "px";
      }else{
        document.getElementById('header').style.top = 0 + "px";
      }
    },
    switchMenu(){
      this.mobile_menu_showed = !this.mobile_menu_showed

      if (this.mobile_menu_showed) {
        document.getElementById('header').style.top = 0 + "px";
      }else{
        this.handleScroll()
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
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: #fff;
    left: 0;
    z-index: 500;
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
    text-align: center;
  }
  .menu-content>a {
      color: #151515;
      font-family: Poppins;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      text-decoration: none;
      margin-bottom: 10px;
  }
  .menu-content{
    display: flex;
    flex-direction: column;
  }
</style>
