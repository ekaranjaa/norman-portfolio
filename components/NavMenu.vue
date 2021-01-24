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
    <li>
      <nuxt-link
        to="/resume"
        class="mx-4 px-4 py-2 text-center text-blue-500 dark:text-green-400 rounded-md border-2 block border-blue-500 dark:border-green-400 transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-green-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
      >
        Resume
      </nuxt-link>
    </li>
    <li class="block">
      <theme-toggle />
    </li>
  </ul>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: { ThemeToggle }
};
</script>
