<template lang="html">
  <footer>
    <div class="footer_top">
      <div class="logo-box">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="links-block">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="links-block">
        <a href="#">Additional pages</a>
        <a href="#">Company info</a>
        <a href="#">Legal information</a>
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
