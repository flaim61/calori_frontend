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


      <div class="menu-content" v-if='this.$store.state.landigsRoute.indexOf(this.$route.name) !== -1'>
        <a @click='this.mobile_menu_showed = false' href="#how_it_work" > {{ this.$locales('l1_how_works')  }} </a>
        <a @click='this.mobile_menu_showed = false' href="#why_calori" > {{ this.$locales('why_calori_block_title') }} </a>
        <a @click='this.mobile_menu_showed = false' href="#menu" > {{this.$locales('our_menu')}} </a>
        <a @click='this.mobile_menu_showed = false' href="#sustainability_approach" > {{ this.$locales('sustainability_approach_title') }} </a>
        <a @click='this.mobile_menu_showed = false' href="#contact" > {{ this.$locales('contact_us') }} </a>
        <a @click='this.$router.push("faq")' > FAQ </a>
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
    <div class="app-title d-flex flex-column justify-content-center" @click='this.$router.push("/")'>
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
    };
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
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
    margin-top: 32px !important;
    font-size: 14px !important;
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
  }
  .menu-content>a:first-child{
    border-top: 2px solid #F0F5F8;
  }
  .menu-content>a {
    color: #151515;
    font-family: Poppins;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none;
    border-bottom: 2px solid #F0F5F8;
    padding-bottom: 16px;
    padding-top: 16px;
  }
  .menu-content{
    display: flex;
    flex-direction: column;
  }
</style>
