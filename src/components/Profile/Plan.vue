<template lang="html">
  <div class="card-profile card">
    <div class="card-top d-flex">
      <h2>Information</h2>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <ul>
          <li>Gender: <span>{{ this.user.gender }}</span></li>
          <li>Age: <span>{{ this.user.age }}</span></li>
          <li>Weight: <span>{{ this.user.weight }}</span></li>
          <li>Height: <span>{{ this.user.height }}</span></li>
          <li>Activity: <span>{{ this.user.activity }}</span></li>
          <li>Allergy: <span>{{ this.user.allergy }}</span></li>
        </ul>
      </div>
      <div class="d-flex flex-column text-center justify-content-center pr-3">
        <span>Goal weight</span>
        <span class="goal">{{ this.user.goal }}</span>
      </div>
    </div>
  </div>

  <div class="card-profile card">
    <div class="card-top d-flex justify-content-between">
      <h2>Score</h2>
      <div class="score-id d-flex">
        Plan ID: 2437
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <RingDiagram :medinspection="14"/>
      </div>
      <div class="d-flex flex-column text-center justify-content-center pr-3">
        <ul>
          <li><span>15 / 25 kg</span> I have lost</li>
          <li><span>20 Hours</span> I have saved</li>
          <li><span>14 Days</span> to change of plan</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="card-profile card">
    <div class="card-top d-flex justify-content-between">
      <h2>Currently plan</h2>
      <div class="data-plan d-flex">
        01.01.2023 - 05.02.2023
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center pr-3">
        <ul>
          <li><span>2500 kсal</span></li>
          <li>5 meals per day</li>
          <li>Protein 139, Fats 94, Carbohydrates 247</li>
        </ul>
      </div>
    </div>
  </div>

  <p class="default-text">
    The plan will change automatically,
      based on weight loss
  </p>
</template>

<script>
import RingDiagram from '@/components/Diagrams/RingDiagram.vue'

export default {
  name: "Plan",
  components: {
    RingDiagram,
  },
  created(){
    this.planInfo = this.getPlanInfo();
    this.user = this.getUser();
  },
  data(){
    return {
      planInfo: {},
      user: {},
    }
  },
  methods: {
    getPlanInfo(){
      return {

      }
    },
    getUser(){
      return {
        name: "name",
        lastname: "lastname",
        age: "age",
        gender: "male",
        height: 100,
        activity: 1,
        allergy: "hz",
        goal: 58
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .default-text{
    color: var(--Grey, #92979B);
    /* Text h3 */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  h2{
    color: var(--Black, #2C2D31);
    /* Text h2 med */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .score-id{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 14px */
  }
  .goal{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 48px */
  }
  li{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    margin-bottom: 4px;
  }
  .card>img, .card>div{
    margin-bottom: 0;
    margin-top: 0;
  }
  li>span{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .data-plan{
    border-radius: 0px 10px;
    background: var(--Accent, #00B467);
    color: #FFF;
    font-family: Inter;
    font-size: 9.298px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 12px 11px;
    margin-top: -16px;
    margin-right: -16px;
    height: fit-content;
  }
</style>
