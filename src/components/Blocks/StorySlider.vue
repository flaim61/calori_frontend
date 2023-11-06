<template lang="html">
  <div class="StorySlider mt-4">

    <div class="slide">
      <div class="slide-img d-flex justify-content-beetwen">
        <img src="@/assets/img/examples/review-example-2.jpeg" alt="">
        <div class="user_info ml-3 d-flex flex-column justify-content-center">
          <h3>
            Mari<br>
            Lahti
          </h3>
          <div>Nutritionist</div>
        </div>
      </div>
      <p class="mt-3"><strong>Terveystieteiden maisteri (ETM)</strong></p>
      <p class="mt-3">"As someone who knows nutrition inside and out, Calori is the real deal. If you're looking to get in shape and stay healthy without the usual hassle, Calori's got your back"</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "StorySlider",
  data() {
    return {

    }
  },
  created(){
    $(document).ready(function(){
      $('.StorySlider').slick({
        dots: true,
        arrows: false,
      });
    });
  }
}
</script>

<style lang="css" scoped>
</style>
