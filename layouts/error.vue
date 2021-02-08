<template>
  <article class="min-h-screen grid place-items-center">
    <div
      class="container mx-auto px-8 py-4 md:px-12 md:py-10 text-center max-w-4xl"
    >
      <div v-if="error.statusCode === 404" class="mx-auto max-w-max">
        <h1 class="mb-2 text-4xl md:text-6xl whitespace-nowrap font-light">
          Page Not Found
        </h1>
        <div class="flex items-center">
          <span class="font-sourcecode text-blue-500 dark:text-cyan-400"
            >404</span
          >
          <span class="ml-4 h-px w-full bg-blue-500 dark:bg-cyan-400"></span>
        </div>
      </div>
      <div v-else class="mx-auto max-w-max">
        <h1 class="mb-2 text-4xl md:text-6xl whitespace-nowrap font-light">
          An Error Occured
        </h1>
        <div class="flex items-center">
          <span class="font-sourcecode text-blue-500 dark:text-cyan-400">{{
            error.statusCode && '???'
          }}</span>
          <span class="ml-4 h-px w-full bg-blue-500 dark:bg-cyan-400"></span>
        </div>
      </div>
      <nuxt-link
        to="/"
        class="mt-8 px-6 py-3 text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20"
      >
        Go Home
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
};
</script>
