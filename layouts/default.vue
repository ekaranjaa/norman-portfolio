<template>
  <div
    class="font-sourcesans text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 leading-6 transition-all"
  >
    <navbar />
    <mobile-menu />
    <social-handles />
    <email-handle />
    <Nuxt />
    <footr />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import SocialHandles from '@/components/SocialHandles.vue';
import EmailHandle from '@/components/EmailHandle.vue';
import Footr from '@/components/Footr.vue';

export default {
  components: {
    Navbar,
    MobileMenu,
    SocialHandles,
    EmailHandle,
    Footr
  }
};
</script>
