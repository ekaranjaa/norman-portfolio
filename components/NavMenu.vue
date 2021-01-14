<template>
  <div>
    <div
      class="fixed inset-0 md:hidden bg-black bg-opacity-50 transition-all duration-300"
      :class="{ 'opacity-0 invisible': !menu, 'opacity-100 visible': menu }"
    ></div>
    <ul
      class="p-8 fixed transform inset-y-0 md:visible right-0 w-56 md:w-max md:shadow-none md:transform-none md:bg-transparent md:dark:bg-transparent bg-white dark:bg-gray-900 md:p-0 md:static flex flex-col justify-center md:justify-start md:flex-row md:items-center transition-all duration-300 md:transition-none z-20 overflow-hidden"
      :class="{
        'translate-x-56 invisible': !menu,
        'translate-x-0 visible shadow-lg': menu
      }"
    >
      <li class="mx-auto mb-8 md:hidden">
        <theme-toggle />
      </li>
      <li>
        <nuxt-link
          to="/#about"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#experience"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Experience</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#projects"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#contact"
          class="mb-8 md:mb-0 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Contact</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/resume"
          class="md:mx-4 md:mb-0 px-4 py-2 text-center text-blue-500 dark:text-green-400 rounded-md border-2 block border-blue-500 dark:border-green-400 transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-green-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
        >
          Resume
        </nuxt-link>
      </li>
      <li class="hidden md:block">
        <theme-toggle />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: { ThemeToggle },
  computed: mapGetters({
    menu: 'menu'
  })
};
</script>
