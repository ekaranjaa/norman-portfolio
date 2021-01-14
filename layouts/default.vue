<template>
  <div
    class="font-sourcesans text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 leading-6 transition-all"
  >
    <navbar />
    <social-handles />
    <email-handle />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SocialHandles from '@/components/SocialHandles.vue';
import EmailHandle from '@/components/EmailHandle.vue';

export default {
  components: {
    Navbar,
    SocialHandles,
    EmailHandle
  }
};
</script>
