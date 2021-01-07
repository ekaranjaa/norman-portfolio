<template>
  <div>
    <button
      v-show="theme === 'dark'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none"
      @click="setTheme('light')"
    >
      <img src="@/assets/icons/light.png" alt="Icon" class="h-2/3 w-2/3" />
    </button>
    <button
      v-show="theme === 'light'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none"
      @click="setTheme('dark')"
    >
      <img src="@/assets/icons/dark.png" alt="Icon" class="h-2/3 w-2/3" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
