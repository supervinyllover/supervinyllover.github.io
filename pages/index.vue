<template>
  <div>
    <Hero :discs="discs" :text="home" />
    <DiscsGrid :discs="discs" />
    <Raffle :raffle="raffle" v-if="raffle.length > 0" />
    <About :about="about" />
    <FAQ :faq="faq" />
    <PageFooter />
    <WhatsAppButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/Hero.vue'
import Raffle from '~/components/Raffle.vue'
import DiscsGrid from '~/components/DiscsGrid.vue'
import About from '~/components/About.vue'
import PageFooter from '~/components/PageFooter.vue'
import FAQ from '~/components/FAQ.vue'
import WhatsAppButton from '~/components/WhatsAppButton.vue'
import {getUrl} from '~/modules/Utils'

export default Vue.extend({
  components: {
    Hero,
    Raffle,
    DiscsGrid,
    About,
    FAQ,
    PageFooter,
    WhatsAppButton
  },
  data() {
    return {
      raffle: [],
      home: {titulo: '', subtitulo: ''}
    }
  },
  async mounted() {
    (this as any).home = await fetch(getUrl('home')).then(response => response.json()).then(content => content[0]);
    (this as any).raffle = await fetch(getUrl('numbers')).then(response => response.json());
  },
  async asyncData({$axios}) {
    return {
      discs: await $axios.$get(getUrl('discs')),
      about: await $axios.$get(getUrl('about')),
      faq: await $axios.$get(getUrl('faq'))
    }
  }
})
</script>

<style>
.page-section {
  background-color: #222;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 20px;

}
.page-section__content {
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 40px 0;
}

@media (min-width: 768px) {
  .page-section__content {
    flex-direction: row;
    width: 100%;
  }
}

.page-section__title {
  font-weight: 600;
  font-size: 42px;
  margin: 40px 0;
}

.page-section__subtitle {
  margin: 0 0 40px 0;
}
</style>
