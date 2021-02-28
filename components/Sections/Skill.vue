<template>
  <section id="skills">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Skills
      </h1>
      <div v-if="skills">
        <ul
          class="mx-auto flex items-center justify-center flex-wrap max-w-3xl"
        >
          <li
            v-for="(skill, index) in skills.skills"
            :key="(index + 1) * Math.random()"
            class="m-1 md:m-2 flex items-center border dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <div class="p-4 h-14 w-14 overflow-hidden">
              <img
                :src="`/images/skills/${skill.icon}`"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <p class="px-4 text-sm md:text-base">
              {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: null
    };
  },
  created() {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      const skills = await this.$content('skills').fetch();

      this.skills = skills;
    }
  }
};
</script>
