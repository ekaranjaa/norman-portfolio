<template>
  <div class="ml-4 h-10 w-10 rounded-full overflow-hidden">
    <button
      v-show="theme === 'dark'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition-all hover:bg-blue-100 dark:hover:bg-gray-700 outline-none"
      @click="toggleTheme('light')"
    >
      <img src="@/assets/icons/light.png" alt="Icon" class="h-2/3 w-2/3" />
    </button>
    <button
      v-show="theme === 'light'"
      class="h-10 w-10 grid place-items-center rounded-full transform transition-all hover:bg-blue-100 dark:hover:bg-gray-700 outline-none"
      @click="toggleTheme('dark')"
    >
      <img src="@/assets/icons/dark.png" alt="Icon" class="h-2/3 w-2/3" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: null
    };
  },
  methods: {
    toggleTheme(theme = null) {
      if (localStorage.getItem('theme') !== null) {
        this.theme = localStorage.getItem('theme');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'dark';
      } else {
        this.theme = 'light';
      }

      if (theme === null) {
        theme = this.theme;
      }

      if (theme === 'dark') {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#121827');
        document.documentElement.classList.add('dark');
      } else {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#406bc7');
        document.documentElement.classList.remove('dark');
      }

      this.theme = theme;
      localStorage.setItem('theme', this.theme);
    }
  },
  mounted() {
    this.toggleTheme();
  }
};
</script>
