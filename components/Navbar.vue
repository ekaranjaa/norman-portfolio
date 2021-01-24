<template>
  <nav
    class="px-8 py-4 flex items-center justify-between sticky top-0 bg-blur bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-20"
  >
    <logo />
    <nav-menu />
    <menu-toggle />
  </nav>
</template>

<script>
import Logo from './Logo.vue';
import MenuToggle from './MenuToggle.vue';
import NavMenu from './NavMenu.vue';

export default {
  components: { Logo, NavMenu, MenuToggle }
};
</script>
