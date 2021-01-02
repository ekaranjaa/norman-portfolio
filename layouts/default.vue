<template>
  <div
    class="text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 transition-all"
  >
    <navbar />
    <social-handles />
    <email-handle />
    <Nuxt />
    <footr />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footr from '@/components/Footr.vue';
import SocialHandles from '~/components/SocialHandles.vue';
import EmailHandle from '~/components/EmailHandle.vue';

export default {
  components: {
    Navbar,
    Footr,
    SocialHandles,
    EmailHandle
  }
};
</script>
