<template lang="html">
  <section class="main-block">
    <Header />
    <h2>
      FAQ
    </h2>
    <div class="faq_content">
      <FAQItem
        :title='this.$locales("faq_1_title")'
        :items="[
          { title: this.$locales('faq_1_item_1_title'), text: this.$locales('faq_1_item_1_text')},
          { title: this.$locales('faq_1_item_2_title'), text: this.$locales('faq_1_item_2_text')},
          { title: this.$locales('faq_1_item_3_title'), text: this.$locales('faq_1_item_3_text')},
          { title: this.$locales('faq_1_item_4_title'), text: this.$locales('faq_1_item_4_text')},
          { title: this.$locales('faq_1_item_5_title'), text: this.$locales('faq_1_item_5_text')},
          { title: this.$locales('faq_1_item_6_title'), text: this.$locales('faq_1_item_6_text')},
        ]"
      />

      <FAQItem
        :title='this.$locales("faq_2_title")'
        :items="[
          { title: this.$locales('faq_2_item_1_title'), text: this.$locales('faq_2_item_1_text')},
          { title: this.$locales('faq_2_item_2_title'), text: this.$locales('faq_2_item_2_text')},
          { title: this.$locales('faq_2_item_3_title'), text: this.$locales('faq_2_item_3_text')},
          { title: this.$locales('faq_2_item_4_title'), text: this.$locales('faq_2_item_4_text')},
          { title: this.$locales('faq_2_item_5_title'), text: this.$locales('faq_2_item_5_text')},
        ]"
      />

      <FAQItem
        :title='this.$locales("faq_3_title")'
        :items="[
          { title: this.$locales('faq_3_item_1_title'), text: this.$locales('faq_3_item_1_text')},
          { title: this.$locales('faq_3_item_2_title'), text: this.$locales('faq_3_item_2_text')},
          { title: this.$locales('faq_3_item_3_title'), text: this.$locales('faq_3_item_3_text')},
          { title: this.$locales('faq_3_item_4_title'), text: this.$locales('faq_3_item_4_text')},
          { title: this.$locales('faq_3_item_5_title'), text: this.$locales('faq_3_item_5_text')},
          { title: this.$locales('faq_3_item_6_title'), text: this.$locales('faq_3_item_6_text')},
        ]"
      />

      <FAQItem
        :title='this.$locales("faq_4_title")'
        :items="[
          { title: this.$locales('faq_4_item_1_title'), text: this.$locales('faq_4_item_1_text')},
          { title: this.$locales('faq_4_item_2_title'), text: this.$locales('faq_4_item_2_text')},
          { title: this.$locales('faq_4_item_3_title'), text: this.$locales('faq_4_item_3_text')},
          { title: this.$locales('faq_4_item_4_title'), text: this.$locales('faq_4_item_4_text')},
        ]"
      />

      <FAQItem
        :title='this.$locales("faq_5_title")'
        :items="[
          { title: this.$locales('faq_5_item_1_title'), text: this.$locales('faq_5_item_1_text')},
          { title: this.$locales('faq_5_item_2_title'), text: this.$locales('faq_5_item_2_text')},
          { title: this.$locales('faq_5_item_3_title'), text: this.$locales('faq_5_item_3_text')},
          { title: this.$locales('faq_5_item_4_title'), text: this.$locales('faq_5_item_4_text')},
          { title: this.$locales('faq_5_item_5_title'), text: this.$locales('faq_5_item_5_text')},
          { title: this.$locales('faq_5_item_6_title'), text: this.$locales('faq_5_item_6_text')},
          { title: this.$locales('faq_5_item_7_title'), text: this.$locales('faq_5_item_7_text')},
          { title: this.$locales('faq_5_item_8_title'), text: this.$locales('faq_5_item_8_text')},
        ]"
      />
    </div>
    <div class="titlep_block">
      <h3 class="block-title">
        {{ this.$locales('contact_form_title') }}
      </h3>
      <p>
        {{ this.$locales('contact_form_text') }}
      </p>
    </div>
    <ContactForm />

    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/Blocks/ContactForm.vue";
import FAQItem from '@/components/FAQ/FAQItem.vue';

export default {
  name: "FAQView",
  data(){
    return {

    }
  },
  components: {
    Header,
    ContactForm,
    FAQItem,
    Footer,
  }
}
</script>

<style lang="css" scoped>
  h2{
    margin-top: 82px;
    color: var(--Grey, #92979B);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 16px;
  }
</style>
