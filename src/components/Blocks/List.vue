<template>
  <div class="">
    <div :class="'list-item ' + this.color" v-for='(li, index) in this.data' :key="index">
      <div class="list-image">
        <span v-if='li.img == 1' style="font-size: 32px;">🥘</span>
        <span v-if='li.img == 2' style="font-size: 32px;">💯</span>
        <span v-if='li.img == 3' style="font-size: 32px;">🌱</span>
        <span v-if='li.img == 4' style="font-size: 32px;">⚡</span>
        <span v-if='li.img == 5' style="font-size: 32px;">🧬</span>
        <span v-if='li.img == 6' style="font-size: 32px;">👨‍🍳</span>
        <span v-if='li.img == 7' style="font-size: 32px;">🌿</span>
        <span v-if='li.img == 8' style="font-size: 32px;">♻️</span>
        <span v-if='li.img == 9' style="font-size: 32px;">🚚</span>
        <span v-if='li.img == 10' style="font-size: 32px;">🗑️</span>
        <span v-if='li.img == 11' style="font-size: 32px;">❌</span>
        <span v-if='li.img == 12' style="font-size: 32px;">✅</span>
        <span v-if='li.img == 13' style="font-size: 32px;">📱</span>
        <span v-if='li.img == 14' style="font-size: 32px;">🙌</span>
        <span v-if='li.img == 15' style="font-size: 32px;">⏯</span>
        <span v-if='li.img == 16' style="font-size: 32px;">🌪️</span>
        <span v-if='li.img == 17' style="font-size: 32px;">🏭</span>
        <span v-if='li.img == 18' style="font-size: 32px;">🏭</span>
        <span v-if='li.img == 19' style="font-size: 32px;">🧮</span>
        <span v-if='li.img == 20' style="font-size: 32px;">😓</span>
        <span v-if='li.img == 21' style="font-size: 32px;">💃</span>
        <span v-if='li.img == 22' style="font-size: 32px;">🤩</span>
        <img v-if='li.img == 70' src="@/assets/img/icon/battery.png" alt="">
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
