<template lang="html">
  <div class="blue_block mt-4">
    <h3>
      {{ this.title }}
    </h3>
    <p v-html='this.text'>
    </p>
  </div>
</template>

<script>
export default {
  name: "BlueTextBlock",
  data(){
    return {

    }
  },
  props: ['text', 'text2', 'text3', 'title']
}
</script>

<style lang="css" scoped>
  .blue_block{
    margin-left: -15px;
    width: calc(100% + 30px);
    background: var(--Bg, #F0F5F8);
    padding: 32px 10px;
  }
  h3{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  p{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }

  @media screen and (min-width: 1000px){
    .blue_block {
        margin-left: -80px;
        width: calc(100% + 160px);
        background: var(--Bg, #F0F5F8);
        padding: 64px 10px;
    }

    .blue_block>h3{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 67.2px */
      margin-bottom: 32px;
      text-align: center;
    }

    .blue_block>p{
      color: var(--Black, #2C2D31);
      text-align: center;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 28.8px */
    }

    .blue_block{
      margin-top: 120px !important;
    }
  }
</style>
