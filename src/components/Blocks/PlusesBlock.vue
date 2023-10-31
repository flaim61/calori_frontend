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
</style>
