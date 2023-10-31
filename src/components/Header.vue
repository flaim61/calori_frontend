<template>
  <Transition>
    <div class="mobile-menu" v-show='this.mobile_menu_showed'>
      <div class="mobile-menu-header">
        <div class="mobile-menu-title">
          Menu
        </div>
        <div class="mobile-menu-icon" @click='this.mobile_menu_showed = !this.mobile_menu_showed'>
          <img src="@/assets/img/icon/close.svg" alt="">
        </div>
      </div>
      <div class="menu-content">
        <a href="#" @click='this.$router.push("login")'> {{ this.$locales('sign_in') }} </a>
      </div>
    </div>
  </Transition>
  <header>
    <div class="menu-item" @click='this.mobile_menu_showed = !this.mobile_menu_showed'>
      <img src="@/assets/img/icon/burger.svg" alt="">
    </div>
    <div class="app-title">
      Calori
    </div>
    <div class="language-item">
      <div class="d-flex">
        <div class="mr-3">
          <a href="#" class="text-dark" @click="setLocales('en')">En</a>
        </div>
        <span>|</span>
        <div class="ml-3">
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
  methods: {
    setLocales(language){
      localStorage.setItem('locale', language);
      location.reload()
    }
  }
}
</script>

<style>
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
