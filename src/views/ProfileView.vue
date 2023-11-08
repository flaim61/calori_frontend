<template>
  <div class="profile-header-wrapper" >
    <div class="profile-header d-flex justify-content-between mb-2">
      <h3>
        {{ this.$locales('personal_profile') }}
      </h3>
      <div class="" v-if='!this.settings'>
        <img src="@/assets/img/icon/settings.svg" alt="" @click='this.settings = !this.settings'>
        <img class='ml-3' src="@/assets/img/icon/logout.svg" alt="" @click='logout'>
      </div>
      <h2 class='d-flex justify-content-between' v-else @click='this.settings = !this.settings'>
        <div class="back-button">
          {{ this.$locales('back_profile') }}
        </div>
      </h2>
    </div>
    <div class="profile_tabs d-flex" v-if='!this.settings' :class="{'pb-custom':!this.planPaid}">
      <div class="profile_tabs_item" :class="{'active' : this.tabs.plan}" @click='this.setActive("plan")'>
        {{ this.$locales('my_plan') }}
      </div>
      <a v-if='this.planPaid' target="_blank" href="https://info.spacent.com/meetings/spacent/book-a-demo?_ga=2.31120575.1439210232.1697105517-791289949.1697105517">
        <div class="profile_tabs_item">
          {{ this.$locales('coach') }}
        </div>
      </a>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.referral}" @click='this.setActive("referral")'>
        Referral
      </div>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.delivery}" @click='this.setActive("delivery")' v-if='this.planPaid'>
        {{ this.$locales('delivery') }}
      </div>
      <div class="profile_tabs_item" :class="{'active' : this.tabs.subscription}" @click='this.setActive("subscription")' v-if='this.planPaid'>
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
      <Subscription v-if='this.tabs.subscription'/>
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
import Subscription from '@/components/Profile/Subscription.vue'
import { getApplication, getPesonalPlan } from '@/services/index.js';

export default {
  name: "ProfileView",
  components: {
    Plan,
    Delivery,
    Coach,
    ProfileSettings,
    Referral,
    Subscription,
  },
  async created(){
    this.checkAfterPayment();
    await this.getPesonalPlan();
  },
  data(){
    return {
      settings: false,
      planPaid: false,
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
    async getPesonalPlan(){
      const response = await getPesonalPlan();
      this.planPaid = response.data.isPaid;
    },
    logout(){
      var cookies = document.cookie.split(";");
    	for (var i = 0; i < cookies.length; i++) {
    		var cookie = cookies[i];
    		var eqPos = cookie.indexOf("=");
    		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    	}

      localStorage.clear();
      location.href = '/';
    },
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
  .pb-custom{
    padding-bottom: 10px;
  }
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
    color: var(--White, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 16.8px */
    white-space: nowrap;
    margin-right: 8px;
    border-radius: 10px;
    border: 2px solid var(--Grey, #92979B);
  }
  .profile_tabs_item.active{
    border-radius: 10px;
    color: white;
    border: 2px solid var(--Grey, #00B467);
    background: var(--Accent, #00B467);
  }
  .profile_tabs{
    overflow-x: auto;
  }
</style>
