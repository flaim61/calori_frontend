<template lang="html">
  <a href="https://billing.stripe.com/p/login/test_14k2aJ5n01Ur6Gc5kk">
    <div class="button bg-dark text-white justify-content-center">
      Edit payment information
    </div>
  </a>
  <!--<h6 class="mt-3">
    Period payment
  </h6>
  <div class="input-group">
    <select class="custom-select" id="inputGroupSelect04" style='height: 40px'>
      <option v-for='(plan, index) in this.plans' :value="plan.priceId">{{plan.name}}</option>
    </select>
    <div class="input-group-append">
        <button class="btn btn-dark" type="button" style='height: 40px'>
          <img src="@/assets/img/icon/66.svg">
        </button>
    </div>
  </div>-->
  <div class="card card-profile mt-4">
    <h3>
      Order list
    </h3>
    <ul class="payments-list mb-0">
      <li class="mb-1" v-for='(payment, index) in this.userPayments' :key='index'>
        <div class="">
          <span class="payments-list-title">
            Payment
          </span>
          <span>
            {{(payment.cost / 100).toFixed(2)}} euros
          </span>
        </div>
        <div class="">
          <span class="d-none">
            {{
              date = new Date(payment.date)
            }}
          </span>
          {{date.getDate()}}.{{date.getMonth() + 1}}.{{date.getFullYear()}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserPayments } from "@/services/index.js"

export default {
  name: "subscription",
  data(){
    return {
      userPayments: [],
      plans: [
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 1 week",
          price: "100",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhuTqLeBqO6",
          name: "Every 2 weeks",
          price: "100",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 3 weeks",
          price: "300",
        },
        {
          priceId: "price_1O7hQCHNRk8vDVhu0d4qmdoG",
          name: "Every 4 weeks",
          price: "200",
        },
      ]
    }
  },
  async created(){
    this.userPayments = await this.getUserPayments();
  },
  methods: {
    async getUserPayments(){
      const response = await getUserPayments();
      return response.data;
    }
  }

}
</script>

<style lang="css" scoped>
  tr>th:last-child{
    text-align: right;
    padding-top: 4px;
  }
  tr>td:last-child{
    text-align: right;
    padding-top: 4px;
  }
  tr>th{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  tr>td{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .input-group>.custom-select{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .input-group-append{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .payments-list>li{
    display: flex;
    justify-content: space-between;
  }
  .payments-list>li>div{
    color: var(--Black, #2C2D31);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .payments-list-title{
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
</style>
