<template lang="html">
  <div class="faq_item" :class="{'closed':!this.active}">
    <div class="faq_item_header d-flex justify-content-between" @click='this.active = !this.active'>
      <span class="faq_item_title"> {{ this.title }} </span>
      <span class="d-flex flex-column justify-content-center">
        <img src="@/assets/img/icon/67.svg">
      </span>
    </div>
    <div class="faq_item_content" v-show='this.active'>
      <template v-for='(item, index) in this.items'>
        <FAQItemBlock :title='item.title' :text='item.text'/>
      </template>
    </div>
  </div>
</template>

<script>
import FAQItemBlock from './FAQItemBlock.vue'

export default {
  name: "FAQItem",
  data(){
    return {
      active: false,
    }
  },
  components:{
    FAQItemBlock
  },
  props: ['title', 'items'],
  methods: {
    openItem(index){
      this.items[index] = true;
    }
  }
}
</script>

<style lang="css" scoped>
  .closed{
    margin-bottom: 0 !important;
    border-top: none !important;
    padding-bottom: 0 !important;
  }
  .closed:last-child{
    border-bottom: none !important;
  }
  .faq_item{
    padding-bottom: 16px;
    border-top: 1px solid var(--Bg-block, #E4E9EF);
    border-bottom: 1px solid var(--Bg-block, #E4E9EF);
  }
  .faq_item_header{
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .faq_item_title{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
</style>
