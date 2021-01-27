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
      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6zM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41z"
    ></path>
  </svg>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Envelope',
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
