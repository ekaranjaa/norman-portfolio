<template>
  <div>
    <div
      class="fixed inset-0 md:hidden bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-20"
      :class="{ 'opacity-0 invisible': !menu, 'opacity-100 visible': menu }"
    ></div>
    <ul
      class="p-8 fixed transform inset-y-0 md:hidden right-0 w-56 bg-white dark:bg-gray-900 flex flex-col justify-center transition-all duration-300 z-20 overflow-hidden"
      :class="{
        'translate-x-56 invisible': !menu,
        'translate-x-0 visible shadow-lg': menu
      }"
    >
      <li class="absolute top-4 right-8">
        <menu-toggle />
      </li>
      <li class="mx-auto mb-8">
        <theme-toggle />
      </li>
      <li>
        <nuxt-link
          to="/#about"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#experience"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Experience</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#projects"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/#contact"
          class="mb-8 px-4 py-2 text-center block w-full transition hover:text-blue-500 dark:hover:text-green-400 focus:text-blue-500 dark:focus:text-green-400"
          >Contact</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/resume"
          class="px-4 py-2 text-center text-blue-500 dark:text-green-400 rounded-md border-2 block border-blue-500 dark:border-green-400 transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-green-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
        >
          Resume
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuToggle from './MenuToggle.vue';
import ThemeToggle from './ThemeToggle.vue';

export default {
  components: { ThemeToggle, MenuToggle },
  computed: mapGetters({
    menu: 'menu'
  })
};
</script>
