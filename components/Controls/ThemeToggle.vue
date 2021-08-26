<template>
  <div>
    <button
      v-show="theme === 'dark'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 ring-blue-500 dark:ring-cyan-500 focus:ring-2 focus:outline-none"
      @click="setTheme('light')"
    >
      <light class="h-2/3 w-2/3" />
    </button>
    <button
      v-show="theme === 'light'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 ring-blue-500 dark:ring-cyan-500 focus:ring-2 focus:outline-none"
      @click="setTheme('dark')"
    >
      <dark class="h-2/3 w-2/3" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Dark from '../Icons/Dark.vue';
import Light from '../Icons/Light.vue';

export default {
  name: 'ThemeToggle',
  components: { Light, Dark },
  computed: mapGetters({
    theme: 'theme'
  }),
  mounted() {
    this.setTheme();
  },
  methods: mapActions({
    setTheme: 'setTheme'
  })
};
</script>
