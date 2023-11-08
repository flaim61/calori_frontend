<template lang="html">
  <div class="faq_item_content_item">
    <div class="d-flex justify-content-between" @click='this.active = !this.active'>
      <span class="faq_item_content_item_title w-75">{{ this.title }}</span>
      <span class="d-flex flex-column justify-content-center">
        <img src="@/assets/img/icon/67.svg">
      </span>
    </div>

    <p v-show='this.active' v-html='this.text'>
    </p>
  </div>
</template>

<script>
export default {
  name: "FAQItemBlock",
  data(){
    return {
      active: false,
    }
  },
  props: ['title', 'text'],
}
</script>

<style lang="css" scoped>
  .faq_item_content_item_title{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .faq_item_content_item{
    padding: 16px;
    border-radius: 16px;
    border: 2px solid var(--Bg, #F0F5F8);
    margin-bottom: 16px;
  }
  .faq_item_content_item>p{
    color: #2C2D31;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    margin-top: 16px;
  }
</style>
