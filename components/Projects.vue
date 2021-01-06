<template>
  <section id="projects">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Some Things I've Built
      </h1>
      <div
        v-for="(project, index) in projects"
        :key="(index + 1) * Math.random()"
        class="mx-auto mb-10 md:mb-16 relative text-right odd:text-left lg:flex lg:items-center odd:flex-row-reverse rounded-xl overflow-hidden"
      >
        <div
          class="h-80 max-w-xl relative rounded-xl overflow-hidden shadow-xl"
        >
          <div
            class="hidden lg:block absolute inset-0 bg-blue-500 dark:bg-green-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
          ></div>
          <img
            :src="project.cover_image"
            :alt="project.name"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10"
          :class="{
            'lg:-ml-12 lg:-mr-0': index / 2 === 0,
            'lg:-ml-0 lg:-mr-12': index / 2 !== 0
          }"
        >
          <div>
            <p
              class="font-sourcecode text-blue-400 dark:text-green-400 rounded"
            >
              Featured
            </p>
            <h2
              class="mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"
            >
              {{ project.name }}
            </h2>
            <div
              class="lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"
            >
              <p>{{ project.description }}</p>
            </div>
            <p
              class="mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              <span
                v-for="(lang, i) in project.languages"
                :key="(i + 1) * Math.random()"
              >
                {{ lang }}
              </span>
            </p>
            <div
              class="mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center"
              :class="{
                'justify-end': index / 2 === 0
              }"
            >
              <a
                :href="project.github_link"
                target="_blank"
                rel="noreferrer"
                class="h-10 w-10 grid place-items-center rounded-full transition hover:text-blue-500 dark:hover:text-green-400"
                ><i class="fab fa-github"></i
              ></a>
              <a
                :href="project.live_link"
                target="_blank"
                rel="noreferrer"
                class="ml-4 h-10 w-10 grid place-items-center rounded-full transition hover:text-blue-500 dark:hover:text-green-400"
                ><i class="fas fa-external-link-alt"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const projects = await this.$content('projects/featured').fetch();

      this.projects = projects;
    }
  }
};
</script>
