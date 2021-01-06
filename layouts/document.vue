<template>
  <div
    class="font-sourcesans text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-900 leading-6 transition-all"
  >
    <mini-navbar />
    <Nuxt />
  </div>
</template>

<script>
import MiniNavbar from '@/components/MiniNavbar.vue';

export default {
  components: {
    MiniNavbar
  }
};
</script>
