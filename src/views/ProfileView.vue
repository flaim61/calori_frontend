<template>
  <div class="profile-header-wrapper">
    <div class="profile-header d-flex justify-content-between">
      <h3>
        {{ this.$locales('personal_profile') }}
      </h3>
      <div class="" v-if='!this.settings' @click='this.settings = !this.settings'>
        <img src="@/assets/img/icon/settings.svg" alt="">
      </div>
      <h2 class='d-flex justify-content-between' v-else @click='this.settings = !this.settings'>
        <div class="back-button">
          {{ this.$locales('back_profile') }}
        </div>
      </h2>
    </div>
    <div class="profile_tabs d-flex" v-if='!this.settings'>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.plan}" @click='this.setActive("plan")'>
        {{ this.$locales('my_plan') }}
      </div>
      <a target="_blank" href="https://info.spacent.com/meetings/spacent/book-a-demo?_ga=2.31120575.1439210232.1697105517-791289949.1697105517">
        <div class="profile_tabs_item">
          {{ this.$locales('coach') }}
        </div>
      </a>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.referral}" @click='this.setActive("referral")'>
        Referral
      </div>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.delivery}" @click='this.setActive("delivery")'>
        {{ this.$locales('delivery') }}
      </div>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.subscription}" @click='this.setActive("subscription")'>
        {{ this.$locales('subscription') }}
      </div>
    </div>
  </div>
  <div class="profile">
    <div class="profile_content" v-if='!this.settings'>
      <Plan v-if='this.tabs.plan'/>
      <Delivery v-if='this.tabs.delivery'/>
      <Coach v-if='this.tabs.coach'/>
      <Referral v-if='this.tabs.referral'/>
    </div>
    <ProfileSettings v-if='this.settings'/>
  </div>
</template>

<script>
import Plan from '@/components/Profile/Plan.vue';
import Delivery from '@/components/Profile/Delivery.vue';
import Coach from '@/components/Profile/Coach.vue';
import ProfileSettings from '@/components/Profile/ProfileSettings.vue'
import Referral from '@/components/Profile/Referral.vue'

export default {
  name: "ProfileView",
  components: {
    Plan,
    Delivery,
    Coach,
    ProfileSettings,
    Referral,
  },
  created(){
    this.checkAfterPayment();
  },
  data(){
    return {
      settings: false,
      tabs: {
        plan: true,
        coach: false,
        referral: false,
        delivery: false,
        subscription: false,
        referral: false,
      },
    }
  },
  methods: {
    setActive(name){
      for (let property in this.tabs) {
        this.tabs[property] = false;
      }

      this.tabs[name] = true;
    },
    checkAfterPayment(){
      let params = (new URL(document.location)).searchParams;
      let payment_result = params.get("payment_result");

      if (payment_result == "success") {
        this.$swal({
          position: 'center',
          icon: 'success',
          title: 'Payment Received',
        })
      }
      if (payment_result == "fail"){

        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Payment Canceled',
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .profile-header>h3{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .profile_tabs::-webkit-scrollbar {
    width: 0;
  }
  .profile{
    background: var(--Bg, #F0F5F8);
  }
  .profile-header-wrapper{
    padding: 10px;
    padding-bottom: 0;
    background-color: white;
  }
  .profile{
    padding: 10px;
    min-height: 100vh;
  }
  .profile_tabs_item{
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--Grey, #92979B);
    color: var(--White, #FFF);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 16.8px */
    white-space: nowrap;
    margin-right: 8px;
  }
  .profile_tabs_item.active{
    border-radius: 10px;
    background: var(--Accent, #00B467);
  }
  .profile_tabs{
    overflow-x: auto;
    margin-bottom: 10px;
  }
</style>
