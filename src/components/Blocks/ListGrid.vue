<template>
  <div class="card list-grid">
    <div class="list-item">
      <div class="list-image">
        <img src="@/assets/img/icon/list-item.svg" alt="">
      </div>
      <div class="list-text">
        Leave your details
      </div>
    </div>
    <div class="list-item">
      <div class="list-image">
        <img src="@/assets/img/icon/list-item.svg" alt="">
      </div>
      <div class="list-text">
        Leave your details
      </div>
    </div>
    <div class="list-item">
      <div class="list-image">
        <img src="@/assets/img/icon/list-item.svg" alt="">
      </div>
      <div class="list-text">
        Leave your details
      </div>
    </div>
    <div class="list-item">
      <div class="list-image">
        <img src="@/assets/img/icon/list-item.svg" alt="">
      </div>
      <div class="list-text">
        Leave your details
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListGrid",
  data(){
    return {

    }
  }
}
</script>

<style>
  .list-item{
    display: flex;
  }
  .list-image{
    margin-right: 20px;
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
  .list-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
  .list-grid>.list-item{
    display: block;
    margin: 0;
  }
  .list-grid>.list-item>.list-image{
    margin-right: 0;
  }
  .list-grid>.list-item>.list-text{
    text-align: center;
  }
</style>
