<template lang="html">
  <div class="card card-profile">
    <p>
      If your invited friend subscribes, <br>
      you will receive a 20% discount on the subsequent subscription
    </p>
    <div class="input-group mb-3 mt-4">
      <input type="text" class="form-control" :value="this.link" placeholder="Recipient's username" disabled>
      <div class="input-group-append">
        <button class="btn btn-dark" type="button" @click='saveReferralInBuffer'>Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "referral",
  data(){
    return{
      link: ""
    }
  },
  async created(){
    this.link = this.getReferralLink()
  },
  methods:{
    getReferralLink(){
      return window.location.origin + "?referral=" + "e232sdsd@1s";
    },
    saveReferralInBuffer(){
      navigator.clipboard.writeText(this.link)
        .then(() => {
          this.$swal({
            position: 'top',
            icon: 'success',
            toast: true,
            title: 'link copied successfully!',
            showConfirmButton: false,
            timer: 3500
          })
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    },
  }
}
</script>

<style lang="css" scoped>
</style>
