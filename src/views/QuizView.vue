<template>
  <div class="quiz">
    <QuizHeader :goBack='goBack' :step='step'/>

    <div class="step" v-if='this.step == 1'>
      <div class="content_section">
        {{ this.$locales('select_your_gender') }}
      </div>
      <div class="button_section">
        <div class="button" @click='this.application.gender = 0; this.step++ '>
          <div>
            {{ this.$locales('male') }}
          </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='this.application.gender = 1; this.step++ '>
          <div>
            {{ this.$locales('female') }}
          </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 2'>
      <div class="content_section">
        <div class="title">
          {{this.$locales('write_your_weight')}}
        </div>
        <div class="content_input_section" :class="{ 'error': this.errors.weight }">
          <input type="number" v-model='this.application.weight'  >
        </div>
        <p class="mb-0">
          {{ this.$locales('quiz1fraze') }}
        </p>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div> {{ this.$locales('next') }} </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 3'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('write_your_height') }}
        </div>
        <div class="content_input_section" :class="{ 'error': this.errors.height }" >
          <input type="number" v-model='this.application.height' >
        </div>
        <p class="mb-0">
          {{ this.$locales('quiz1fraze') }}
        </p>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>{{ this.$locales('next') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 4'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('how_old') }}
        </div>
        <div class="content_input_section" :class="{ 'error': this.errors.age }">
          <input type="number" v-model='this.application.age'  >
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>{{ this.$locales('next') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 5'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('choose_activity') }}
        </div>
        <div class="content_input_section">
          <div class="button_in_content" @click='this.application.activity = 0; this.step++'>
            <div> {{ this.$locales('activity_0') }} </div>
            <p>Little or no exercise</p>
          </div>
          <div class="button_in_content" @click='this.application.activity = 1; this.step++'>
            <div> {{ this.$locales('activity_1') }} </div>
            <p>Sports 1–3 days a week</p>
          </div>
          <div class="button_in_content" @click='this.application.activity = 2; this.step++'>
            <div> {{ this.$locales('activity_2') }} </div>
            <p>Sports 3-5 times a week</p>
          </div>
        </div>
      </div>
    </div>


    <div class="step" v-if='this.step == 6'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('write_yout_goal') }}
        </div>
        <div class="content_input_section" :class="{ 'error' : this.errors.goal }">
          <label for="">{{ this.$locales('goal_weight') }}:</label>
          <input type="email" v-model='this.application.goal' >
          <span> {{ this.$locales('target_weight_min_error') }}</span>
        </div>
        <div class="title">
           {{ this.$locales('recommended_weight') }} {{this.calculated_weight.minWeight}}-{{this.calculated_weight.maxWeight}} kg.
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>{{ this.$locales('next') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>


    <div class="step" v-if='this.step == 7'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('allergies_any_foods') }}
        </div>
      </div>
      <div class="button_section">
        <div class="button" @click='this.step = 7.1'>
          <div>{{ this.$locales('yes') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='this.step++'>
          <div>{{ this.$locales('no') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 7.1'>
      <div class="content_section">
        <div class="list">
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='0'>
            <label for="">Lactose <br>containing products</label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='1'>
            <label for="">Gluten <br>containing products</label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='2'>
            <label for="">Nuts <br>Products containing</label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='3'>
            <label for="">Fish <br>Seafood</label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='4'>
            <label for="">Citrus<br>products containing</label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='5'>
            <label for="">Other allergies</label>
          </div>
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='this.step = 8;'>
          <div>{{ this.$locales('next') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 8'>
      <div class="content_section">
        <div class="title" v-if='!this.application.allergies.length'>
          {{ this.$locales('quiz2fraze') }}
        </div>
        <div class="title" v-if='this.application.allergies.indexOf("5") >= 0'>
          {{ this.$locales('quiz3fraze') }}
        </div>
        <div class="title" v-if='!this.application.allergies.indexOf("5") >= 0 && this.application.allergies.length'>
          {{ this.$locales('quiz4fraze') }}
        </div>
        <div class="content_input_section">
          <div class="content_input_section" v-if='this.application.allergies.indexOf("5") >= 0'>
            <label for="">{{this.$locales('allergy')}}</label>
            <input type="text" v-model='this.application.another_allergy'>
          </div>
          <div class="content_input_section" :class="{ 'error' : this.errors.email }">
            <label for="">{{this.$locales('email')}}</label>
            <input type="email" v-model='this.application.email' >
            <span> {{ this.$locales('user_alredy_exist') }} </span>
          </div>
        </div>
      </div>
      <div class="button_section">
        <div class="button" @click='this.createApplication()'>
          <div> {{ this.$locales('create_plan') }} </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 9'>
      <CheckBlock :plan='this.plan' :returnQuizBegin='returnQuizBegin' :createdApplication='this.createdApplication'/>
    </div>

  </div>
</template>

<script>
import QuizHeader from "@/components/Quiz/QuizHeader.vue"
import CheckBlock from "@/components/Quiz/CheckBlock.vue"
import {
  getApplicationWeight,
  createApplication,
  updateApplication,
  getApplication
}
from "@/services/index.js"

export default {
  name: "Quiz",
  components: {
    QuizHeader,
    CheckBlock,
  },
  async created(){
    if (this.$store.state.auth) {
      this.createdApplication = await this.getApplication();
    }
  },
  data(){
    return {
      step: 1,
      application: {
        gender: 0,
        weight: 70,
        height: 170,
        age: 20,
        activity: 0,
        goal: 50,
        email: "",
        allergies: [],
        another_allergy: null,
      },
      createdApplication: null,
      calculated_weight: {
        minWeight: 0,
        minWeight: 0,
      },
      errors: {
        weight: false,
        height: false,
        age: false,
        goal: false,
        email: true,
      },
      plan: {
        date_end: "30.4.2024",
      },
    }
  },
  methods:{
    async getApplication(){
      const response = await getApplication();
      return response.data;
    },
    returnQuizBegin(){
      this.step = 1;
    },
    async getApplicationWeight(){
      const response = await getApplicationWeight({
        gender: this.application.gender,
        weight: this.application.weight,
        height: this.application.height,
        age: this.application.age,
        activity: this.application.activity
      });

      this.calculated_weight = response.data;
    },
    async createApplication(){
      if (this.step == 8 && this.application.email == "") {
        this.errors.email = true;
        return
      }

      console.log('create')
      console.log(this.application)

      try {
        const response = await createApplication({
          gender: this.application.gender,
          weight: this.application.weight,
          height: this.application.height,
          age: this.application.age,
          activity: this.application.activity,
          goal: this.application.goal,
          email: this.application.email,
          allergies: this.application.allergies,
          anotherAllergy: this.application.another_allergy
        });

        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your login and password have been sent to your email',
          showConfirmButton: false,
          timer: 1500
        })

        this.createdApplication = response.data.application;
        this.$cookies.set("auth_token", response.data.token);

        this.step = 9;
      } catch (e) {
        console.log(e)
        this.errors.email = true;
      }
    },
    goBack(){
      if (this.step === 1) {
        this.$router.go(-1);
      }else{
        this.step = Math.ceil(this.step-1);
      }
    },
    async nextStep(){
      if (this.step == 2 && this.application.weight <= 0) {
        this.errors.weight = true;
        return
      }

      if (this.step == 3 && this.application.height <= 0) {
        this.errors.height = true;
        return
      }

      if (this.step == 4 && this.application.age <= 0) {
        this.errors.age = true;
        return
      }

      if (this.step == 6 && this.application.goal <= 0) {
        this.errors.goal = true;
        return
      }

      if (this.step == 6 && this.application.goal < this.calculated_weight.minWeight) {
        this.errors.goal = true;
        return
      }

      for (let key in this.errors) {
        this.errors[key] = false;
      }

      this.step++;
    },
    sendApplication(){
      if (this.step == 8 && this.application.email == "") {
        this.errors.email = true;
        return
      }

      this.step = 9;
    },
    async updateApplication(){
      try {
        console.log('update')
        console.log(this.application)
        const response = await updateApplication({
          gender: this.application.gender,
          weight: this.application.weight,
          height: this.application.height,
          age: this.application.age,
          activity: this.application.activity,
          goal: this.application.goal,
          email: this.application.email,
          allergies: this.application.allergies,
          anotherAllergy: this.application.another_allergy
        });

        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your login and password have been sent to your email',
          showConfirmButton: false,
          timer: 1500
        })
        this.createdApplication = response.data.application;

        console.log(this.createdApplication);
        this.step = 9;
      } catch (e){
        console.log(e)
      }
    }
  },
  watch: {
    async step(){
      if (this.step == 8 && this.$store.state.auth) {
        await this.updateApplication()
      }
    },
    application: {
      async handler(newValue, oldValue) {
        this.errors.email = false;
        this.errors.goal = false;
        this.errors.weight = false;

        if (newValue.height < 0) {
          this.application.height = 0
        }

        if (newValue.weight < 0) {
          this.application.weight = 0
        }

        if (newValue.goal < 0) {
          this.application.goal = 0;
        }

        if (newValue.age < 0) {
          this.application.age = 0
        }

        if (newValue.height &&
            newValue.weight &&
            newValue.goal &&
            newValue.age) {
          await this.getApplicationWeight()
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .error>label{
    color: #C9324B;
  }
  .content_input_section>input[type='email']{
    width: auto;
  }
  .button + .button{
    margin-left: 10px
  }
  .button_section{
    position: fixed;
    bottom: 21px;
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 20px);
    max-width: 580px;
  }
  .content_section{
    height: calc(100vh - 180px);
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    color: #0A1221;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .content_input_section{
    margin-top: 24px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content_input_section + .content_input_section{
    margin-top: 0px;
  }
  .content_input_section>label {
    text-align: left;
  }
  .content_input_section>span{
    display: none;
  }
  .content_input_section>input{
    height: 40px;
    padding: 0px 16px;
    border: none;
    color: var(--Black, #232323);
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 8px;
    background: var(--Bg-block, #E4E9EF);
  }
  .content_section>p{
    color: var(--Grey, #92979B);
    /* Text h3 */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: left;
  }
  .error>span{
    display: block;
    text-align: left;
    color: var(--Error, #C9324B);
    /* Text h4 */
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 8px;
  }
  .error>input{
    border: 1px solid #C9324B;
  }
  .button_in_content{
    border-radius: 16px;
    background: #303030;
    padding: 10px 20px;
    color: #FFF;
    text-align: left;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 20px;
  }
  .button_in_content>p{
    color: #A5A5A5;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 4px;
  }
  .list_item {
    display: flex;
    text-align: left;
    margin-bottom: 20px;
  }
  input[type='checkbox']{
    transform: scale(2.3);
    margin-left: 15px;
    accent-color: black;
  }
  .list_item>label{
    margin-left: 22px;
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .quiz{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
  }
</style>
