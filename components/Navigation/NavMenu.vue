<template>
  <ul class="hidden static md:flex justify-start items-center">
    <li>
      <nuxt-link
        to="/#about"
        class="px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
        >About</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
        to="/#skills"
        class="px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
        >Skills</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
        to="/#experience"
        class="px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
        >Experience</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
        to="/#projects"
        class="px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
        >Projects</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
        to="/#contact"
        class="px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
        >Contact</nuxt-link
      >
    </li>
    <li class="block">
      <theme-toggle />
    </li>
  </ul>
</template>

<script>
import ThemeToggle from '@/components/Controls/ThemeToggle.vue';

export default {
  name: 'NavMenu',
  components: { ThemeToggle }
};
</script>
