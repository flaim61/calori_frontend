<template lang="html">
  <footer class="mt-5">
    <div class="logo-box text-center">
      <img class="logo-footer" src="@/assets/img/logo.svg" alt="">
      <img class="logo-footer" src="@/assets/img/123.jpg" alt="">
    </div>
    <div class="footer_bottom">
      <div class="text-center">
        <a href="https://www.linkedin.com/company/calori-fi/" target="_blank"><img src="@/assets/img/icon/social-1.svg"></a>
        <a href="https://www.instagram.com/calori.fi/" class="ml-3 mr-3"  target="_blank"><img src="@/assets/img/icon/social-2.svg"></a>
        <a href="https://www.facebook.com/calori.fi" target="_blank"><img src="@/assets/img/icon/social-3.svg"></a>
      </div>
      <div class="text-center privacy-block mt-2">
        <a href="mailto:info@calori.fi">info@calori.fi</a>
      </div>
      <p class="mt-3 text-center mb-4">
        2023 Lagom food Oy. All rights reserved.
      </p>
      <div class="text-center privacy-block">
        <a href="#" class="mr-2">Privacy policy</a>
        <a href="#" class="ml-2">Terms of service</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {

    }
  }
}
</script>

<style lang="css" scoped>

  .logo-footer{
    height: 58px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .privacy-block>a{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  footer{
    padding: 0px 15px 30px 15px;
  }
  .footer_top{
    display: flex;
    justify-content: space-between;
  }
  .links-block{
    display: flex;
    flex-direction: column;
  }
  .links-block>a{
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    flex-direction: column;
    text-decoration: none;
    color: black;
    margin-bottom: 12px;
  }
  .footer_bottom{
    margin-top: 30px;
  }
</style>
