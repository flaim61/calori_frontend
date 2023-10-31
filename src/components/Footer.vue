<template lang="html">
  <footer class="mt-5">
    <div class="logo-box text-center">
      <img src="@/assets/img/icon/footer-logo.svg" alt="">
    </div>
    <div class="footer_bottom">
      <div class="text-center">
        <a href="#"><img src="@/assets/img/icon/social-1.svg"></a>
        <a href="#" class="ml-3 mr-3"><img src="@/assets/img/icon/social-2.svg"></a>
        <a href="#"><img src="@/assets/img/icon/social-3.svg"></a>
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
