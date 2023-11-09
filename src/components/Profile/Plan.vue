<template lang="html">
  <div class="card-profile card"  v-if='this.personalPlan && this.application && this.personalPlan.isPaid'>
    <div class="card-top d-flex">
      <h2> {{ this.$locales('information') }}</h2>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <ul class="mb-0">
          <li>
            {{ this.$locales('gender') }}:
            <span>
              {{ this.application == 0 ? "female" : "male" }}
            </span>
          </li>
          <li>
            {{ this.$locales('age') }}:
            <span>
              {{ this.application.age }}
            </span>
          </li>
          <li>
            {{ this.$locales('weight') }}:
            <span>
              {{ this.application.weight }}
            </span>
          </li>
          <li>
            {{ this.$locales('height') }}:
            <span>
              {{ this.application.height }}
            </span>
          </li>
          <li>
            {{ this.$locales('activity') }}:
            <span class="mt-2" v-if='this.application.activityLevelId == 0'>{{ this.$locales('activity_0') }}</span>
            <span class="mt-2" v-if='this.application.activityLevelId == 1'>{{ this.$locales('activity_1') }}</span>
            <span class="mt-2" v-if='this.application.activityLevelId == 2'>{{ this.$locales('activity_2') }}</span>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-column text-center justify-content-center pr-3">
        <span>
          {{ this.$locales('goal_weight') }}
        </span>
        <span class="goal">
          {{ this.application.goal }}
        </span>
      </div>
    </div>
  </div>

  <div class="card-profile card"  v-if='this.personalPlan && this.application && this.personalPlan.isPaid'>
    <div class="card-top d-flex justify-content-between">
      <h2>
        {{ this.$locales('score') }}
      </h2>
      <div class="score-id d-flex">
        Plan ID: {{ this.personalPlan.personalPlanId }}
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        <RingDiagram :medinspection="this.progressPercentage"/>
      </div>
      <div class="d-flex flex-column text-center justify-content-center pr-3">
        <ul>
          <li>
            <span>
              {{this.personalPlan.weightLost}}
              {{ this.$locales('kg') }}
            </span>
            I have lost
          </li>
          <li>
            <span>
              {{this.personalPlan.hoursSaved}}
              {{ this.$locales('hours') }}
            </span>
            I have saved
          </li>
          <li>
            <span>
              {{this.personalPlan.daysToChangePlan}}
              {{ this.$locales('days') }}
            </span>
            to change of plan
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="card-profile card"  v-if='this.personalPlan && this.application  && this.personalPlan.isPaid && this.personalPlan.currentCaloriPlan'>
    <div class="card-top d-flex justify-content-between">
      <h2>
        {{ this.$locales('currently_plan') }}
      </h2>
      <div class="data-plan d-flex">
        <span class="d-none">
          {{ startDate = new Date(this.personalPlan.startDate) }}
          {{ finishDate = new Date(this.personalPlan.finishDate) }}
        </span>
        {{startDate.getDate()}}.{{startDate.getMonth()+1}}.{{startDate.getFullYear()}} -
        {{finishDate.getDate()}}.{{finishDate.getMonth()+1}}.{{finishDate.getFullYear()}}
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center pr-3">
        <ul class="mb-0">
          <li><span>{{this.personalPlan.currentCaloriPlan.calories}} kсal</span></li>
          <li>5 meals per day<br>
              Protein {{this.personalPlan.currentCaloriPlan.protein}} , Fats {{this.personalPlan.currentCaloriPlan.fats}}, Carbohydrates {{this.personalPlan.currentCaloriPlan.carbohydrates}}</li>
        </ul>
      </div>
    </div>
  </div>

  <p class="default-text" v-if='this.personalPlan && this.personalPlan.isPaid'>
    {{ this.$locales('plan_auto') }}
  </p>
  {{console.log(this.application)}}
  <CheckBlock v-if='this.personalPlan && !this.personalPlan.isPaid && this.application' :createdApplication='this.application'/>
</template>

<script>
import RingDiagram from '@/components/Diagrams/RingDiagram.vue'
import CheckBlock from '@/components/Quiz/CheckBlock.vue'
import { getApplication, getPesonalPlan } from '@/services/index.js';

export default {
  name: "Plan",
  components: {
    RingDiagram,
    CheckBlock,
  },
  async created(){
    this.personalPlan = await this.getPesonalPlan();
    this.application = await this.getApplication();
    this.progressPercentage = this.calculatePercentage(
      new Date(this.personalPlan.startDate),
      new Date(this.personalPlan.finishDate)
    );
  },
  data(){
    return {
      personalPlan: null,
      application: null,
      progressPercentage: 0,
    }
  },
  methods: {
    calculatePercentage(startDate, endDate) {
      var currentDate = new Date();
      var totalMilliseconds = endDate - startDate;
      var elapsedMilliseconds = currentDate - startDate;
      var percentage = (elapsedMilliseconds / totalMilliseconds) * 100;
      if (percentage < 0) {
        return 0;
      }

      return percentage.toFixed(2);
    },
    async getPesonalPlan(){
      const response = await getPesonalPlan();
      console.log(response.data)
      return response.data
    },
    async getApplication(){
      const response = await getApplication();
      console.log(response.data)
      return response.data
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
