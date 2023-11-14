<template lang="html">
  <div class="mb-5">
    <div v-for='(pluse, index) in this.pluses' :key="index" class="p-3 mb-3">
      <h3>
        {{pluse.title}}
      </h3>
      <p>
        {{pluse.text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlusesBlock",
  data(){
    return {

    }
  },
  props: ['pluses']
}
</script>

<style lang="css" scoped>
  h3{
    color: var(--Accent, #00B467);
  }

  @media screen and (min-width: 1000px){
    h3{
      color: var(--Accent, #00B467);
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 50.4px */
      text-align: center;
    }

    p{
      color: var(--Black, #2C2D31);
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 33.6px */
      text-align: center;
    }
  }
</style>
