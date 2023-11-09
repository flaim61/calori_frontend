<template>
  <div class="quiz" :class="{'fixed': this.step != 9}">
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
          <div class="input-group" :class="{ 'error': this.errors.weight || this.errors.min_weight}">
            <input type="number" class="form-control" v-model='this.application.weight'>
            <div class="input-group-append">
              <span class="input-group-text">Kg.</span>
            </div>
          </div>
          <span>
            {{ this.$locales('calc_error') }}
          </span>
        </div>
        <p class="mb-0" v-if='!this.errors.weight'>
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
        <div class="mt-1 content_input_section"  :class="{ 'error': this.errors.height }">
          <div class="input-group" :class="{ 'error': this.errors.height }">
            <input type="number" class="form-control" v-model='this.application.height'>
            <div class="input-group-append">
              <span class="input-group-text">Cm.</span>
            </div>
          </div>
          <span>
            {{ this.$locales('calc_error') }}
          </span>
        </div>
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
        <div class="mt-0 content_input_section" >
          <div class="input-group" :class="{ 'error': this.errors.age }">
            <input type="number" class="form-control" v-model='this.application.age'>
            <div class="input-group-append">
              <span class="input-group-text">{{this.$locales('years_old')}}.</span>
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

    <div class="step" v-if='this.step == 5'>
      <div class="content_section">
        <div class="title">
          {{ this.$locales('choose_activity') }}
        </div>
        <div class="content_input_section">
          <div class="input-group">
            <v-select
              id='activity_select'
              v-model="this.application.activity"
              :options="this.activities"
              :reduce="activity => activity.id"
              :searchable="false"
              :clearable="false"
              label="name"
              >
              <template v-slot:option="option">
                <div class="">
                  <span class="pto">{{ option.name }}</span>
                  <span>
                    {{ option.text }}
                  </span>
                </div>
              </template>
            </v-select>
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
      <div class="bmi">
        <span>{{this.$locales('bmi_title')}}</span>
        <p>
          {{ this.$locales('bmi_text') }}
        </p>
      </div>
      <div class="content_section">
        <div class="content_input_section" :class="{ 'error' : this.errors.goal }">
          <label for="" class="text-left text-dark">{{ this.$locales('write_yout_goal') }}:</label>
          <div class="input-group" :class="{ 'error' : this.errors.goal }">
            <input type="number" class="form-control" v-model='this.application.goal'>
            <div class="input-group-append">
              <span class="input-group-text">Kg.</span>
            </div>
          </div>
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
      <div class="content_section list_Section">
        <div class="list">
          <div class="list_item">
            <label for="check_1" class='mb-0 label_item'>
              <input id='check_1' type="checkbox" v-model='this.application.allergies' value='1'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_1') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_2" class='mb-0 label_item'>
              <input id='check_2' type="checkbox" v-model='this.application.allergies' value='2'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_2') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_3" class='mb-0 label_item'>
              <input id='check_3' type="checkbox" v-model='this.application.allergies' value='3'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_3') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_4" class='mb-0 label_item'>
              <input type="checkbox" id='check_4' v-model='this.application.allergies' value='4'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_4') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_5" class='mb-0 label_item'>
              <input id='check_5' type="checkbox" v-model='this.application.allergies' value='5'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_5') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_7" class='mb-0 label_item'>
              <input id='check_7' type="checkbox" v-model='this.application.allergies' value='7'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_6') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_8" class='mb-0 label_item'>
              <input id='check_8' type="checkbox" v-model='this.application.allergies' value='8'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_7') }}
              </div>
            </label>
          </div>
          <div class="list_item">
            <label for="check_" class='mb-0 label_item'>
              <input id='check_' type="checkbox" v-model='this.application.allergies' value='6'>
              <span class="checkmark"></span>
              <div class="">
                {{ this.$locales('allergy_8') }}
              </div>
            </label>
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
      <div class="mt-0 mb-0">
        <div class="title mt-0" v-if='!this.bmiError && !this.allergyError'>
          {{ this.$locales('check17frase') }}
        </div>
        <div class="title small-text mt-0" v-if='this.bmiError && !this.allergyError' v-html='this.$locales("bmiErrorFrase")'>
        </div>
        <div class="title small-text mt-0" v-if='this.allergyError && (this.application.allergies.indexOf("6") != -1)' v-html='this.$locales("anotherAllergyErrorFrase")'>
        </div>
        <div class="title small-text mt-0" v-if='this.allergyError && (this.application.allergies.indexOf("6") == -1)' v-html='this.$locales("allergyErrorFrase")'>
        </div>
        <div class="content_input_section mt-0">
          <div class="content_input_section" v-if='this.application.allergies.indexOf("6") >= 0'>
            <label for="">{{this.$locales('allergy')}}</label>
            <input type="text" :placeholder="this.$locales('allergy')" v-model='this.application.another_allergy'>
          </div>
          <div class="content_input_section" v-if='this.bmiError || (this.allergyError && (this.application.allergies.indexOf("6") != -1))'>
            <label for="">{{this.$locales('whats_phone')}}</label>
            <input type="text" :placeholder="this.$locales('whats_phone')" v-model='this.application.phone'>
          </div>
          <div class="content_input_section" :class="{ 'error' : this.errors.email }" v-if='!this.$store.state.auth'>
            <label for="">{{this.$locales('whats_your_email')}}</label>
            <input type="email" :placeholder="this.$locales('whats_your_email')" v-model='this.application.email' >
            <span> <a href='/login'>{{ this.$locales('user_alredy_exist') }} </a></span>
          </div>
        </div>
        <div class="button button-in-quiz d-flex justify-content-center" @click='this.createApplication()' v-if='!this.$store.state.auth'>
          <div> {{ this.$locales('button_quiz_send') }} </div>
        </div>
        <div class="button button-in-quiz d-flex justify-content-center" @click='this.updateApplication()' v-else>
          <div>  {{ this.$locales('button_quiz_send') }}  </div>
        </div>
      </div>
    </div>

    <div class="" v-if='this.step == 9'>
      <CheckBlock :returnQuizBegin='returnQuizBegin' :createdApplication='this.createdApplication'/>
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
      activities: [
        {
          id: 0,
          name: this.$locales(`activity_0`),
          text: this.$locales(`activity_0_text`),
        },
        {
          id: 1,
          name: this.$locales(`activity_1`),
          text: this.$locales(`activity_1_text`),
        },
        {
          id: 2,
          name: this.$locales(`activity_2`),
          text: this.$locales(`activity_2_text`),
        },
      ],
      application: {
        phone: "",
        gender: "",
        weight: "",
        height: "",
        age: "",
        activity: 0,
        goal: "",
        email: "",
        allergies: [],
        another_allergy: "",
      },
      createdApplication: null,
      calculated_weight: {
        minWeight: 0,
        maxWeight: 0,
      },
      bmiError: false,
      allergyError: false,
      errors: {
        weight: false,
        height: false,
        age: false,
        goal: false,
        email: false,
        min_weight: false,
      },
    }
  },
  async created(){
    if (this.$cookies.get("auth_token")) {
      this.step = 9;
      const application = await this.getApplication();
      application.allergies = application.applicationAllergies;
      application.another_allergy = application.anotherAllergy
      this.application = application;
      this.createdApplication = application;
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
          phone: this.application.phone,
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

        if (this.allergyError || this.bmiError) {
            this.$router.push('/')
            return;
        }

        if (!response.data.token) {
            this.$router.push('/')
            return;
        }

        this.createdApplication = response.data.application;
        this.$cookies.set("auth_token", response.data.token);
        localStorage.setItem('auth_token', response.data.token)

        location.reload()
        this.step = 9;
      } catch (e) {
        console.log(e);
        this.errors.email = true;
      }
    },
    goBack(){
      if (this.step == 7) {
        this.step = Math.ceil(this.step-1);
        this.calculate_recomended_weight();
      }

      if (this.step === 1) {
        let page = localStorage.getItem('main-page') ? localStorage.getItem('main-page') : "/";
        this.$router.push(page);
      }else{
        this.step = Math.ceil(this.step-1);
      }
    },
    calculate_recomended_weight(){
      let heightM = this.application.height / 100;
      this.calculated_weight.maxWeight = Math.ceil(24.9 * heightM * heightM);
      this.calculated_weight.minWeight = Math.ceil((Math.ceil(18.5 * heightM * heightM) + Math.ceil(24.9 * heightM * heightM))/2);

      if (this.bmiError) {
        this.application.goal = this.calculated_weight.minWeight + 1;
        this.step = 8;
        return;
      }

      this.step++;
    },
    async nextStep(){
      if (this.step == 2 && (this.application.weight == 0 || this.application.weight == "" || this.application.weight < 40 || this.application.weight > 179)) {
        this.errors.weight = true;
        return;
      }

      if (this.step == 3 && (this.application.height == 0 || this.application.height == "" || this.application.height < 40 || this.application.height > 219)) {
        this.errors.height = true;
        return;
      }

      if (this.step == 4 && (this.application.age == 0 || this.application.age == "")) {
        this.errors.age = true;
        return;
      }

      if (this.step == 5) {
        return this.calculate_recomended_weight();
      }

      if (this.step == 6  && (this.application.goal == 0 || this.application.goal == "")) {
        this.errors.goal = true;
        return;
      }

      if (this.step == 6  && (this.application.goal < this.calculated_weight.minWeight)) {
        this.errors.goal = true;
        return;
      }

      this.step++;
    },
    async updateApplication(){
      if (this.step == 8 && this.application.email == "") {
        this.errors.email = true;
        return
      }
      try {
        this.application.allergies = this.application.allergies.filter(a => a != 5);

        const response = await updateApplication({
          phone: this.application.phone,
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

        if (response.data.application == null || this.calculated_weight.minWeight >= this.application.weight) {
            this.$router.push('/');
            return;
        }

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
    }
  },
  watch: {
    async step(){
    },
    application: {
      async handler(newValue, oldValue) {
        let value = false

        if (this.application.activity == 0 && this.application.gender == 1 && this.application.weight >= 150) {
          console.log(1)
          value = true;
        }
        if (this.application.activity == 1 && this.application.gender == 1 && this.application.weight >= 150) {
          console.log(2)
          value = true;
        }
        if (this.application.activity == 2 && this.application.gender == 1 && this.application.weight >= 120) {
          console.log(3)
          value = true;
        }
        if (this.application.activity == 0 && this.application.gender == 0 && this.application.weight > 125) {
          console.log(4)
          value = true;
        }
        if (this.application.activity == 1 && this.application.gender == 0 && this.application.weight > 100) {
          console.log(5)
          value = true;
        }
        if (this.application.activity == 2 && this.application.gender == 0 && this.application.weight > 84) {
          console.log(6)
          value = true;
        }
        if (this.application.weight < this.application.goal) {
          console.log(7)
          value = true;
        }
        this.bmiError = value;
        this.allergyError = !this.application.allergies.filter(a => a != 1).length == 0
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .button-in-quiz>div{
    font-size: 14px !important;
    font-weight: 400 !important;
  }
  .bmi{
    margin-bottom: -72px;
    margin-top: 45px;
  }
  .bmi>span{
    color: var(--Black, #2C2D31);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .bmi>p{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
  .small-text{
    font-size: 14px;
    line-height: 120%;
    font-weight: 300;
  }
  .fixed{
    position: fixed;
  }
  .pto{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .label_item>div{
    margin-left: 10px;
  }

  .label_item>div>span{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .label_item {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .label_item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    border: 2px solid #7a7a7a;
    border-radius: 100%;
    margin-top: -7px;
  }

  /* On mouse-over, add a grey background color */
  .label_item:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .label_item input:checked ~ .checkmark {
    border: 2px solid #00a860;
  }

  .list_Section{
    height: auto;
    margin-top: 32px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .label_item input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .label_item .checkmark:after {
    left: 10px;
    top: 6px;
    width: 7px;
    height: 12px;
    border: solid #00a860;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .email-card{
    position: fixed;
    bottom: 0px;
    width: calc(100% - 32px);
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
    font-size: 19px !important;
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
    width: calc(100vw - 30px);
    max-width: 570px;
  }
  .content_section{
    height: 62vh;
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
    position: fixed;
    width: calc(100% - 32px);
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
    text-align: left;
    font-family: Poppins;
    font-size: 16px;
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
    font-size: 13px;
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
    margin-left: 10px;
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
    /*position: fixed;
    top: 0;*/
    width: 100vw;
  }
  .step{
    position: fixed;
    width: calc(100% - 32px);
  }
</style>
