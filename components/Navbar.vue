<template>
  <nav
    class="px-8 py-4 flex items-center justify-between sticky top-0 w-full bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 transition-all z-10"
  >
    <logo />
    <nav-menu />
    <theme-toggle class="md:hidden" />
  </nav>
</template>

<script>
import Logo from './Logo.vue';
import NavMenu from './NavMenu.vue';
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: { Logo, NavMenu, ThemeToggle }
};
</script>
