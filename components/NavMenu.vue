<template>
  <ul class="hidden md:flex items-center text-sm">
    <li>
      <nuxt-link to="#!" class="px-4 py-2 block transition hover:text-blue-500"
        >About</nuxt-link
      >
    </li>
    <li>
      <nuxt-link to="#!" class="px-4 py-2 block transition hover:text-blue-500"
        >Experience</nuxt-link
      >
    </li>
    <li>
      <nuxt-link to="#!" class="px-4 py-2 block transition hover:text-blue-500"
        >Projects</nuxt-link
      >
    </li>
    <li>
      <nuxt-link to="#!" class="px-4 py-2 block transition hover:text-blue-500"
        >Contact</nuxt-link
      >
    </li>
    <li>
      <a
        href="#!"
        class="ml-4 px-4 py-2 text-blue-500 rounded-md border-2 block border-blue-500 transition hover:bg-blue-500 hover:bg-opacity-20"
      >
        Resume
      </a>
    </li>
    <li>
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
