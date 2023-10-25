<template>
  <div class="card">
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
  name: "List",
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
</style>
