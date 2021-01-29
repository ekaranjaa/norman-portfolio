<template>
  <nav
    ref="navbar"
    class="px-8 py-4 flex items-center justify-between fixed top-0 w-full bg-blur bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 transition-all duration-300 z-20"
  >
    <logo />
    <nav-menu />
    <menu-toggle />
  </nav>
</template>

<script>
import Logo from '@/components/Icons/Logo.vue';
import MenuToggle from '@/components/Controls/MenuToggle.vue';
import NavMenu from '@/components/Navigation/NavMenu.vue';

export default {
  name: 'Navbar',
  components: { Logo, NavMenu, MenuToggle },
  mounted() {
    this.animateNav();
  },
  methods: {
    animateNav() {
      let prevScrollpos = window.pageYOffset;

      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          this.$refs.navbar.style.top = '0';
        } else {
          this.$refs.navbar.style.top = '-6rem';
        }

        prevScrollpos = currentScrollPos;
      };
    }
  }
};
</script>
