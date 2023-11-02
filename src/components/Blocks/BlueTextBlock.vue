<template lang="html">
  <div class="blue_block mt-4">
    <h3>
      {{ this.title }}
    </h3>
    <p>
      {{ this.text }}
    </p>
    <p class="mt-4">
      {{ this.text2 }}
    </p>
    <p class="mt-4">
      {{ this.text3 }}
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
</style>
