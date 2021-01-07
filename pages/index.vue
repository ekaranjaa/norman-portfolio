<template>
  <div>
    <headr />
    <about />
    <experience />
    <projects />
    <contact />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Headr from '@/components/Headr.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: { Headr, About, Experience, Projects, Contact },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
