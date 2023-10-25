<template>
  <div class="card review">
    <div class="">
      +100 Happy customers
    </div>
    <div class="review-user-block">
      <img src="@/assets/img/examples/user-photo.jpeg" alt="">
      <div class="name">
        Natalie. 26 years old.
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur. Dictumst diam faucibus faucibus egestas. Lorem ipsum dolor sit amet consectetur. Dictumst diam faucibus faucibus egestas.
    </p>
  </div>
</template>

<script>
export default {
  name: "Review",
  data(){
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .review-user-block{
    display: flex;
    display: flex;
    justify-content: space-between;
  }
  .review-user-block>img{
    width: 119px;
    height: 188px;
    object-fit: cover;
  }
  .review>p{
    padding-left: 24px;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: -88px;
  }

</style>
