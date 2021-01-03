<template>
  <div>
    <overlay class="md:hidden" />
    <ul
      class="p-8 fixed inset-y-0 h-full w-full max-w-xs md:max-w-none right-0 shadow-lg md:shadow-none bg-red-300 dark:bg-gray-900 md:p-0 md:static md:flex md:items-center z-20"
    >
      <li>
        <nuxt-link
          to="#about"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#experience"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400"
          >Experience</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#projects"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="#contact"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400"
          >Contact</nuxt-link
        >
      </li>
      <li>
        <a
          href="#!"
          class="mx-auto md:mx-4 px-4 py-2 text-center text-blue-500 dark:text-green-400 rounded-md border-2 block border-blue-500 dark:border-green-400 transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20"
        >
          Resume
        </a>
      </li>
      <li class="hidden md:block">
        <theme-toggle />
      </li>
    </ul>
  </div>
</template>

<script>
import Overlay from './Overlay.vue';
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: { ThemeToggle, Overlay }
};
</script>
