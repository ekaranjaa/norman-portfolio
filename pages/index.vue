<template>
  <div>
    <headr />
    <about />
    <experience />
    <modal />
    <project />
    <contact />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Headr from '@/components/Headr.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Modal from '@/components/Modal.vue';
import Project from '@/components/Project.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    Headr,
    About,
    Experience,
    Modal,
    Project,
    Contact
  },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
