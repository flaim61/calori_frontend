<template>
  <div class="quiz">
    <QuizHeader :goBack='goBack' :step='step'/>

    <div class="step" v-if='this.step == 1'>
      <div class="content_section big">
        {{ this.$locales('select_your_gender') }}
      </div>
      <div class="button_section">
        <div class="button" @click='this.application.gender = 0; nextStep()'>
          <div>
            {{ this.$locales('male') }}
          </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='this.application.gender = 1; nextStep()'>
          <div>
            {{ this.$locales('female') }}
          </div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 2'>
      <div class="content_section">
        <div class="title text-left">
          {{this.$locales('write_your_weight')}}
        </div>
        <div class="mt-1 content_input_section" :class="{ 'error': this.errors.weight || this.errors.min_weight}">
          <input type="number" v-model='this.application.weight'  >
          <span v-if='this.errors.min_weight'>Your weight is less than or equal to the recommended weight</span>
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
        <div class="title text-left">
          {{ this.$locales('write_your_height') }}
        </div>
        <div class="mt-1 content_input_section" :class="{ 'error': this.errors.height }" >
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
        <div class="title text-left">
          {{ this.$locales('how_old') }}
        </div>
        <div class="mt-0 content_input_section" :class="{ 'error': this.errors.age }">
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
          <div class="input-group">
          <select class="custom-select" id="inputGroupSelect04" style='height: 40px'>
            <option value="0">{{ this.$locales('activity_0') }}</option>
            <option value="1">{{ this.$locales('activity_1') }}</option>
            <option value="2">{{ this.$locales('activity_2') }}</option>
          </select>
          <div class="input-group-append">
            <button class="btn btn-dark" type="button" style='height: 40px'>
              <img src="@/assets/img/icon/66.svg">
            </button>
          </div>
        </div>
        </div>
      </div>
      <div class="button_section button_section_one_button">
        <div class="button" @click='nextStep'>
          <div>{{ this.$locales('next') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>


    <div class="step" v-if='this.step == 6'>
      <div class="content_section">
        <div class="content_input_section" :class="{ 'error' : this.errors.goal }">
          <label for="" class="text-left">{{ this.$locales('write_yout_goal') }}:</label>
          <input type="email" v-model='this.application.goal' >
          <span> {{ this.$locales('target_weight_min_error') }}</span>
        </div>
        <div class="title mt-5 text-left">
           {{ this.$locales('recommended_weight')}}:
        </div>
        <div class="text-left big-green">
          {{this.calculated_weight.minWeight}}-{{this.calculated_weight.maxWeight}} kg.
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
        <div class="title big">
          {{ this.$locales('allergies_any_foods') }}
        </div>
      </div>
      <div class="button_section">
        <div class="button" @click='this.step = 7.1'>
          <div>{{ this.$locales('yes') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
        <div class="button" @click='nextStep()'>
          <div>{{ this.$locales('no') }}</div>
          <img src="@/assets/img/icon/button_arrow.svg">
        </div>
      </div>
    </div>

    <div class="step" v-if='this.step == 7.1'>
      <div class="content_section">
        <div class="list">
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='1'>
            <label for="" class='mb-0'>Lactose <br><span>containing products</span></label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='2'>
            <label for="" class='mb-0'>Gluten <br><span>containing products</span></label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='3'>
            <label for="" class='mb-0'>Nuts <br><span>containing products</span></label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='4'>
            <label for="" class='mb-0'>Fish <br><span>Seafood</span></label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value='5'>
            <label for="" class='mb-0'>Citrus<br><span>containing products</span></label>
          </div>
          <div class="list_item">
            <input type="checkbox" v-model='this.application.allergies' value=''>
            <label for="" class='mb-0'>Other allergies</label>
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

    <div class="shadow-none  email-card card step" v-if='this.step == 8'>
      <div class="">
        <div class="title mt-0" v-if='!this.application.allergies.length'>
          {{ this.$locales('quiz2fraze') }}
        </div>
        <div class="title mt-0" v-if='this.application.allergies.indexOf("5") >= 0'>
          {{ this.$locales('quiz3fraze') }}
        </div>
        <div class="title mt-0" v-if='!this.application.allergies.indexOf("5") >= 0 && this.application.allergies.length'>
          {{ this.$locales('quiz4fraze') }}
        </div>
        <div class="content_input_section">
          <div class="content_input_section" v-if='this.application.allergies.indexOf("5") >= 0'>
            <label for="">{{this.$locales('allergy')}}</label>
            <input type="text" v-model='this.application.another_allergy'>
          </div>
          <div class="content_input_section" :class="{ 'error' : this.errors.email }">
            <label for="">{{this.$locales('email')}}</label>
            <input type="email" placeholder="Write your e-mail" v-model='this.application.email' >
            <span> {{ this.$locales('user_alredy_exist') }} </span>
          </div>
        </div>
        <div class="button d-flex justify-content-center" @click='this.createApplication()'>
          <div> Send </div>
          <img class="ml-2" src="@/assets/img/icon/mail.svg">
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
  data(){
    return {
      step: 1,
      application: {
        gender: 0,
        weight: 0,
        height: 0,
        age: 0,
        activity: 0,
        goal: 0,
        email: "",
        allergies: [],
        another_allergy: "",
      },
      createdApplication: null,
      calculated_weight: {
        minWeight: 0,
        maxWeight: 0,
      },
      errors: {
        weight: false,
        height: false,
        age: false,
        goal: false,
        email: false,
        min_weight: false,
      },
      plan: {
        date_end: "30.4.2024",
      },
    }
  },
  async created(){
    if (this.$cookies.get("auth_token")) {
      this.createdApplication = await this.getApplication();
      this.step = 9;
    }
  },
  methods:{
    returnQuizBegin(){
      this.step = 1;
    },
    async getApplication(){
      if (this.$cookies.get("auth_token")) {
        const response = await getApplication();
        return response.data;
      }
    },
    async createApplication(){
      if (this.step == 8 && this.application.email == "") {
        this.errors.email = true;
        return
      }

      try {
        this.application.allergies = this.application.allergies.filter(a => a != 5);

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

        if (response.data.application == null) {
              this.$swal({
                position: 'top',
                icon: 'success',
                toast: true,
                title: 'Unfortunately, we do not have a suitable diet for you! We have sent an email to you!',
                showConfirmButton: false,
                timer: 3500
              })

              this.$router.push('/');
              return;
        }

        this.createdApplication = response.data.application;
        this.$cookies.set("auth_token", response.data.token);
        localStorage.setItem('auth_token', response.data.token)


        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your login and password have been sent to your email',
          showConfirmButton: false,
          timer: 3500
        })
        location.reload()
        this.step = 9;
      } catch (e) {
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
    calculate_recomended_weight(){
      let heightM = this.application.height / 100;
      this.calculated_weight.maxWeight = Math.ceil(24.9 * heightM * heightM);
      this.calculated_weight.minWeight = Math.ceil(18.5 * heightM * heightM);

      if (this.calculated_weight.minWeight >= this.application.weight) {
        this.step = 2;
        this.errors.min_weight = true;
      }else{
        this.step++;
      }
    },
    async nextStep(){
      if (this.step == 2 && this.application.weight == 0) {
        this.errors.weight = true;
        return;
      }

      if (this.step == 3 && this.application.height == 0) {
        this.errors.height = true;
        return;
      }

      if (this.step == 4 && this.application.age == 0) {
        this.errors.age = true;
        return;
      }

      if (this.step == 5) {
        return this.calculate_recomended_weight();
      }

      if (this.step == 6 && this.application.goal < this.calculated_weight.minWeight) {
        this.errors.goal = true;
        return;
      }

      this.step++;
    },
    /*async updateApplication(){
      if (this.step == 8 && this.application.email == "") {
        this.errors.email = true;
        return
      }
      try {
        this.application.allergies = this.application.allergies.filter(a => a != 5);

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

        if (response.data.application == null) {
              this.$swal({
                position: 'top',
                icon: 'success',
                toast: true,
                title: 'Unfortunately, we do not have a suitable diet for you! We have sent an email to you!',
                showConfirmButton: false,
                timer: 3500
              })

              this.$router.push('/');
              return;
        }

        console.log(response)
        this.createdApplication = response.data.application;
        this.$cookies.set("auth_token", response.data.token);

        this.$swal({
          position: 'top',
          icon: 'success',
          toast: true,
          title: 'Your login and password have been sent to your email',
          showConfirmButton: false,
          timer: 3500
        })
        location.reload()
        this.step = 9;
      } catch (e) {
        console.log(e)
        this.errors.email = true;
      }
    }*/
  },
  watch: {
    async step(){
    },
    application: {
      async handler(newValue, oldValue) {
        for (var key in this.errors) {
          this.errors[key] = false;
        }

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
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .email-card{
    position: absolute;
    bottom: 0px;
    margin-right: 16px !important;
    box-shadow: none !important;
  }
  label>span{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  .list{
    background: var(--White, #FFF);
    padding-top: 4px;
    padding-bottom: 12px;
    border-radius: 15px;
  }
  .big-green{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .custom-select{
    border-radius: 8px;
    background: var(--Bg-block, #E4E9EF);
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .big{
    color: var(--Black, #2C2D31);
    text-align: center;
    font-family: Inter;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
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
    padding: 18px 8px;
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
    line-height: 100%;
  }
  .quiz{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
  }
</style>
