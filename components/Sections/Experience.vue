<template>
  <section id="experience">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <div class="mb-5 md:mb-10 flex items-center">
        <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
          Experience
        </h1>
        <span class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"></span>
      </div>
      <div class="md:flex">
        <ul
          class="flex items-center overflow-x-auto md:overflow-visible md:block"
        >
          <li
            v-for="(exp, index) in experience"
            :key="(index + 1) * Math.random()"
          >
            <button
              class="px-4 py-3 whitespace-nowrap text-left block w-full border-b-2 md:border-b-0 md:border-l-2 dark:border-gray-600 transition hover:text-blue-500 hover:bg-gray-100 dark:hover:text-cyan-400 dark:hover:bg-gray-800 focus:text-blue-500 focus:bg-gray-100 dark:focus:text-cyan-400 dark:focus:bg-gray-800 ring-blue-500 dark:ring-cyan-500 focus:ring-2 focus:outline-none"
              :class="{
                'text-gray-400 border-gray-300': activeTab !== exp.company,
                'text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400':
                  activeTab === exp.company
              }"
              @click="activeTab = exp.company"
            >
              {{ exp.company }}
            </button>
          </li>
        </ul>
        <div
          v-for="(exp, index) in experience"
          :key="(index + 1) * Math.random()"
          class="py-4 md:px-4 md:py-2"
          :class="{ hidden: activeTab !== exp.company }"
        >
          <div class="mb-2">
            <h2 class="text-xl md:text-2xl">
              {{ exp.role }}
              <a
                :href="exp.company_website"
                target="_blank"
                rel="noreferrer"
                class="text-blue-500 dark:text-cyan-400"
                >@{{ exp.company }}</a
              >
            </h2>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ exp.contract.type }} &middot; {{ exp.duration }}
            </span>
          </div>
          <p class="mb-2 leading-7">
            {{ exp.description }}
            <span v-if="exp.contract.live"> My tasks include: </span>
            <span v-else> My tasks included: </span>
          </p>
          <ul class="px-4 list-disc">
            <li
              v-for="(task, i) in exp.tasks"
              :key="(i + 1) * Math.random()"
              class="mb-2"
            >
              {{ task }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experience: [],
      activeTab: null
    };
  },
  created() {
    this.getAbout().then(() => this.setActiveTab());
  },
  methods: {
    async getAbout() {
      const experience = await this.$content('experience')
        .sortBy('updatedAt')
        .fetch();

      this.experience = experience;
    },
    setActiveTab() {
      if (this.experience.length > 0) {
        this.activeTab = this.experience[0].company;
      }
    }
  }
};
</script>
