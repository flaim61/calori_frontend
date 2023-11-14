<template>
  <div class="list-block">
    <div :class="'list-item ' + this.color" v-for='(li, index) in this.data' :key="index">
      <div class="list-image">
        <span v-if='li.img == 1' class='list-img'>🥘</span>
        <span v-if='li.img == 2' class='list-img'>💯</span>
        <span v-if='li.img == 3' class='list-img'>🌱</span>
        <span v-if='li.img == 4' class='list-img'>⚡</span>
        <span v-if='li.img == 5' class='list-img'>🧬</span>
        <span v-if='li.img == 6' class='list-img'>👨‍🍳</span>
        <span v-if='li.img == 7' class='list-img'>🌿</span>
        <span v-if='li.img == 8' class='list-img'>♻️</span>
        <span v-if='li.img == 9' class='list-img'>🚚</span>
        <span v-if='li.img == 10' class='list-img'>🗑️</span>
        <span v-if='li.img == 11' class='list-img'>❌</span>
        <span v-if='li.img == 12' class='list-img'>✅</span>
        <span v-if='li.img == 13' class='list-img'>📱</span>
        <span v-if='li.img == 14' class='list-img'>🙌</span>
        <span v-if='li.img == 15' class='list-img'>⏯</span>
        <span v-if='li.img == 16' class='list-img'>🌪️</span>
        <span v-if='li.img == 17' class='list-img'>🏭</span>
        <span v-if='li.img == 18' class='list-img'>🏭</span>
        <span v-if='li.img == 19' class='list-img'>🧮</span>
        <span v-if='li.img == 20' class='list-img'>😓</span>
        <span v-if='li.img == 21' class='list-img'>💃</span>
        <span v-if='li.img == 22' class='list-img'>🤩</span>
        <span v-if='li.img == 70' class='list-img'>❌</span>
      </div>
      <div class="list-text">
        {{ li.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: [ 'data', "color" ],
  data(){
    return {

    }
  }
}
</script>

<style>
  .list-item{
    display: flex;
    padding: 8px;
    border-radius: 8px;
    background: #F0F5F8;
    margin-bottom: 16px;
  }
  .list-image{
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .list-image>img{
    height: 100%;
    width: 100%;
  }
  .list-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .list-item.red{
    background: #F7E8EB !important;
  }
  .list-item.green{
    background: #E8F7F0 !important;
  }
</style>
