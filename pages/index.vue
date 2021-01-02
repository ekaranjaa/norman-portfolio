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
import Headr from '@/components/Headr.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: { Headr, About, Experience, Projects, Contact }
};
</script>
