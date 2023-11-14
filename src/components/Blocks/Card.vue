<template>
  <div class="card card-1" :class="{'green': this.green}">
    <h3>
      {{this.title}}
    </h3>
    <img v-if='this.image == 1' src="@/assets/img/howitwork/1.jpeg" alt="">
    <img v-if='this.image == 2' src="@/assets/img/howitwork/2.jpeg" alt="">
    <img v-if='this.image == 3' src="@/assets/img/howitwork/3.jpeg" alt="">
    <img v-if='this.image == 4' src="@/assets/img/howitwork/4.jpeg" alt="">
    <img v-if='this.image == 5' src="@/assets/img/howitwork/5.jpeg" alt="">
    <img v-if='this.image == 6' src="@/assets/img/howitwork/6.jpeg" alt="">
    <img v-if='this.image == 7' src="@/assets/img/howitwork/7.jpeg" alt="">
    <img v-if='this.image == 8' src="@/assets/img/howitwork/8.jpeg" alt="">
    <img v-if='this.image == 9' src="@/assets/img/howitwork/9.jpeg" alt="">
    <iframe v-if='this.video == 1 && this.windowWidth < 700' src="https://player.vimeo.com/video/882344250?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <iframe v-if='this.video == 2 && this.windowWidth < 700' src="https://player.vimeo.com/video/882344258?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <iframe v-if='this.video == 3 && this.windowWidth < 700'  src="https://player.vimeo.com/video/882344169?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <iframe v-if='this.video == 4 && this.windowWidth < 700'  src="https://player.vimeo.com/video/882344998?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    <iframe v-if='this.video == 5 && this.windowWidth < 700'  src="https://player.vimeo.com/video/882345011?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>

    <video v-if='this.video == 1 && this.windowWidth > 1000' autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false">
      <source src="@/assets/videos/1.mp4" type="video/mp4">
    </video>

    <video v-if='this.video == 2 && this.windowWidth > 1000' autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false">
      <source src="@/assets/videos/2.mp4" type="video/mp4">
    </video>

    <video v-if='this.video == 3 && this.windowWidth > 1000' autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false">
      <source src="@/assets/videos/3.mp4" type="video/mp4">
    </video>

    <video v-if='this.video == 4 && this.windowWidth > 1000' autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false">
      <source src="@/assets/videos/4.mp4" type="video/mp4">
    </video>

    <video v-if='this.video == 5 && this.windowWidth > 1000' autoplay="true" muted="true" loop="true" preload="true" playsinline="true" controls="false">
      <source src="@/assets/videos/5.mp4" type="video/mp4">
    </video>

    <p>
      <h3>
        {{this.title}}
      </h3>
      <span v-html='this.text'></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {

  },
  props: ['green', 'title', 'image', 'text', 'video'],
  data(){
    return {
      windowWidth: window.innerWidth
    }
  },
  created: function() {
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize(){
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style>
  .card>iframe{
    border-radius: 8px;
    height: 180px;
    object-fit: cover;
    margin-bottom: 16px;
  }
  .card>img{
    margin-top: 16px;
    margin-bottom: 16px;
  }
  h3, .card>div{
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media screen and (min-width: 1000px){
    video {
      border-radius: 16px;
    }
  }
</style>
