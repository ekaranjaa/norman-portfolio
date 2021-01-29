<template>
  <section id="about">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <div class="mb-5 lg:mb-10 flex items-center">
        <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
          About Me
        </h1>
        <span class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"></span>
      </div>
      <div v-if="about" class="lg:grid lg:grid-cols-2">
        <div>
          <p
            v-for="(desc, index) in description"
            :key="(index + 1) * Math.random()"
            class="mb-2"
          >
            {{ desc }}
          </p>
        </div>
        <div class="mt-6 lg:mt-0">
          <div
            class="mx-auto relative h-72 w-full max-w-md lg:w-72 lg:max-w-full rounded-xl shadow-xl overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-blue-500 dark:bg-green-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
            ></div>
            <img
              :src="`/images/profile/${about.image}`"
              :alt="about.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      about: null
    };
  },
  computed: {
    description() {
      const about = this.about;
      let description;

      if (about !== null) {
        description = about.description.split('\n');
      }

      return description;
    }
  },
  created() {
    this.getAbout();
  },
  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();

      this.about = about;
    }
  }
};
</script>
