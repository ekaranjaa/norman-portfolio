<template>
  <article>
    <embed
      class="w-full h-screen"
      height="500"
      src="https://docs.google.com/document/d/1Pyqde26ua-K39WifwkpOtKYBCQez14WB-dLxfwU34u0/edit#heading=h.4prkjmzco10w"
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
