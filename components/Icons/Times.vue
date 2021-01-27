<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <path
      :fill="themeColor"
      d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"
    ></path>
  </svg>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Times',
  computed: {
    ...mapGetters({
      theme: 'theme'
    }),
    themeColor() {
      let color;

      if (!this.theme || this.theme === 'light') {
        color = '#6a727f';
      } else {
        color = '#9ca3af';
      }

      return color;
    }
  }
};
</script>
