<template>
  <section id="projects">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Projects
      </h1>
      <div
        class="mx-auto relative lg:flex lg:items-center rounded-xl overflow-hidden"
      >
        <div
          class="h-80 max-w-xl relative rounded-xl overflow-hidden shadow-xl"
        >
          <div
            class="hidden lg:block absolute inset-0 bg-blue-500 dark:bg-green-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
          ></div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a7d8a885516221.5d7e861fd0c57.jpg"
            alt="Project One"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="p-4 md:p-6 lg:p-0 text-right flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:-ml-12 lg:relative lg:bg-transparent lg:dark:bg-transparent even: z-10"
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
              Lorem ipsum dolor sit amet.
            </h2>
            <div
              class="lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                vel itaque quam recusandae nisi veniam inventore eum culpa odit,
                nihil voluptas modi, unde id deleniti alias dicta voluptatum, ad
                autem?
              </p>
            </div>
            <p
              class="mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              Kotlin, Go
            </p>
            <div
              class="mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center justify-end"
            >
              <a
                href="#!"
                class="h-10 w-10 grid place-items-center rounded-full transition hover:text-blue-500 dark:hover:text-green-400"
                ><i class="fab fa-github"></i
              ></a>
              <a
                href="#!"
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
export default {};
</script>
