<template>
  <div class="card">
    <div class="title">
      Still unsure?
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur.
    </p>
    <div class="review-user-block">
      <img src="@/assets/img/examples/user-photo.jpeg" alt="">
      <div class="name">
        <div class="">
          Natalie. 26 years old.
        </div>
        <ul>
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review2",
  data(){
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .title{
    font-family: Poppins;
    font-size: 33px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .review-user-block{
    display: flex;
    display: flex;
    justify-content: space-between;
  }
  .review-user-block>img{
    width: 119px;
    height: 188px;
    object-fit: cover;
    margin-right: 20px;
  }
  p{
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  li{
    margin-bottom: 12px;
  }
  .name{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
