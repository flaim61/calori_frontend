<template lang="html">
  <p class="mb-4">
    {{ this.$locales('plan_auto') }}
  </p>
  <h3>
    {{ this.$locales('scheduled_meetings') }}

  </h3>
  <div class="card-profile card" v-for='(meet, index) in meetings' :key='meet.id'>
    <span class="coach-item">
      <span class="coach-item-header d-flex justify-content-between">
        <span>{{this.$locales('coach')}}: {{meet.coach}}</span>
        <span class="date">{{meet.date}}</span>
      </span>
      <div class="btn w-100 border-5" @click='cancelMeet(meet.id)'>
        <img src="@/assets/img/icon/11.svg" alt="">{{ this.$locales('cancel_meeting') }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "Coach",
  data(){
    return {
      meetings: [
        {
          id: 1,
          coach: "test test",
          date: "19:30 / 9.06.2024",
        },
        {
          id: 2,
          coach: "test test",
          date: "11:30 / 15.06.2024",
        },
        {
          id: 3,
          coach: "test test",
          date: "14:30 / 4.06.2024",
        },
      ],
    }
  },
  methods: {
    cancelMeet(id){
      this.meetings = this.meetings.filter(m => m.id != id);
      this.$swal({
        position: 'top',
        icon: 'success',
        toast: true,
        title: 'Your meet has been canceled!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .date{
    color: var(--Accent, #00B467);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .coach-item>.btn{
    border-radius: 10px;
    border: 1px solid var(--Bg-block, #E4E9EF);
    background: var(--White, #FFF);
    padding: 10px;
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-top: 28px;
  }
</style>
