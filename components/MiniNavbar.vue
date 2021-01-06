<template>
  <nav
    class="px-8 py-4 flex items-center justify-between fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-20"
  >
    <button
      class="h-10 w-10 text-blue-500 dark:text-green-400 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 outline-none"
      @click="$router.go(-1)"
    >
      <i class="fas fa-arrow-left"></i>
    </button>
    <theme-toggle />
  </nav>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: {
    ThemeToggle
  }
};
</script>
