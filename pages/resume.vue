<template>
  <article>
    <embed
      class="w-full h-screen"
      height="500"
      src="/documents/resume.pdf"
      type="application/pdf"
    />
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'document',
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
