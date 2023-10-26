<template>
  <div class="quiz">
    <QuizHeader :goBack='goBack' :step='step'/>

    <div class="step" v-if='this.step == 1'>
      <div class="content_section">
        Select your gender
      </div>
      <div class="button_section">
        <div class="button" @click='this.application.gender = "male"; this.step++ '>
          <div>Male</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='this.application.gender = "female"; this.step++ '>
          <div>Female</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 2'>
      <div class="content_section">
        <div class="title">
          Write your weight
        </div>
        <div class="content_input_section">
          <input type="number" v-model='this.application.weight' :class="{ 'error': this.errors.weight }" >
        </div>
        <p class="mb-0">
          Your personal trainer will monitor you throughout the process and make changes as necessary. At your pace.
        </p>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>Next</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 3'>
      <div class="content_section">
        <div class="title">
          Write your height
        </div>
        <div class="content_input_section">
          <input type="number" v-model='this.application.height' :class="{ 'error': this.errors.height }" >
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>Next</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 4'>
      <div class="content_section">
        <div class="title">
          How old are you?
        </div>
        <div class="content_input_section">
          <input type="number" v-model='this.application.age' :class="{ 'error': this.errors.age }" >
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>Next</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 5'>
      <div class="content_section">
        <div class="title">
          Choose level of your activity
        </div>
        <div class="content_input_section">
          <div class="button_in_content" @click='this.application.activity = 0; this.step++'>
            <div>Inactive lifestyle</div>
            <p>Little or no exercise</p>
          </div>
          <div class="button_in_content" @click='this.application.activity = 1; this.step++'>
            <div>Light activity</div>
            <p>Sports 1–3 days a week</p>
          </div>
          <div class="button_in_content" @click='this.application.activity = 2; this.step++'>
            <div>Moderate activity</div>
            <p>Sports 3-5 times a week</p>
          </div>
        </div>
      </div>
    </div>


    <div class="step" v-if='this.step == 6'>
      <div class="content_section">
        <div class="title">
          What is your goal weight?
        </div>
        <div class="content_input_section">
          <div class="content_input_section">
            <input type="number" v-model='this.application.goal' :class="{ 'error': this.errors.goal }" >
          </div>
        </div>
        <div class="title">
           BMI recommend your ideal weight is 60-70 kg.
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>Next</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>


    <div class="step" v-if='this.step == 7'>
      <div class="content_section">
        <div class="title">
          Do you have allergies to any foods?
        </div>
      </div>
      <div class="button_section">
        <div class="button" @click='this.step = 7.1'>
          <div>Yes</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='this.step++'>
          <div>No</div>
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
          <div>Next</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 8'>
      <div class="content_section">
        <div class="title" v-if='!this.application.allergies.length'>
          Leave your email so we can send you a meal plan
        </div>
        <div class="title" v-if='this.application.allergies.indexOf("5") >= 0'>
          Write that you are allergic and provide your Email
        </div>
        <div class="title" v-if='!this.application.allergies.indexOf("5") >= 0 && this.application.allergies.length'>
          Leave your email and we will contact you
        </div>
        <div class="content_input_section">
          <div class="content_input_section" v-if='this.application.allergies.indexOf("5") >= 0'>
            <label for="">Allergy</label>
            <input type="text" v-model='this.application.another_allergy'>
          </div>
          <div class="content_input_section">
            <label for="">Email</label>
            <input type="email" v-model='this.application.email' :class="{ 'error': this.errors.email }" >
          </div>
        </div>
      </div>
      <div class="button_section">
        <div class="button" @click='sendApplication'>
          <div>Get a meal plan</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import QuizHeader from "@/components/Quiz/QuizHeader.vue"

export default {
  name: "Quiz",
  components: {
    QuizHeader
  },
  data(){
    return {
      step: 1,
      application: {
        gender: 'male',
        weight: 50,
        height: 170,
        age: 20,
        activity: 0,
        goal: 50,
        email: "",
        allergies: [],
        another_allergy: null,
      },
      errors: {
        weight: false,
        height: false,
        age: false,
        goal: false,
        email: false,
      }
    }
  },
  methods:{
    goBack(){
      if (this.step === 1) {
        this.$router.go(-1);
      }else{
        this.step = Math.ceil(this.step-1);
      }
    },
    sendApplication(){
      if (this.application.email == "") {
        this.errors.email = true;
        return;
      }

      console.log(this.application);
    },
    nextStep(){
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

      for (let key in this.errors) {
        this.errors[key] = false;
      }

      this.step++;
    }
  },
  watch: {

  }
}
</script>

<style scoped>
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
    max-width: 600px;
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
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .content_input_section + .content_input_section{
    margin-top: 0px;
  }
  .content_input_section>label {
    text-align: left;
  }
  .content_input_section>input{
    height: 40px;
    padding: 0px 16px;
    border-radius: 8px;
    border: 1px solid var(--Title, #0A1221);
    color: var(--Black, #232323);
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .content_section>p{
    color: #A5A5A5;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .error{
    border: 1px solid red !important;
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
  }
</style>
