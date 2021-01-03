<template>
  <section id="about">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <div class="mb-5 lg:mb-10 flex items-center">
        <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
          About Me
        </h1>
        <span class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"></span>
      </div>
      <div class="lg:grid lg:grid-cols-2">
        <div>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            ipsam!
          </p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            veniam earum dignissimos? Eaque corporis voluptatum ut cum atque
            maxime velit nisi accusamus soluta possimus, ipsa dignissimos nam
            illo odio deserunt.
          </p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            veniam earum dignissimos? Eaque corporis voluptatum ut cum atque
            maxime velit nisi accusamus soluta possimus, ipsa dignissimos nam
            illo odio deserunt.
          </p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            ipsam!
          </p>
          <ul class="mt-4 grid grid-cols-2 max-w-xs">
            <li>Java</li>
            <li>Kotlin</li>
            <li>Go</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="mt-6 lg:mt-0">
          <div
            class="mx-auto relative h-80 w-full max-w-md lg:w-72 lg:max-w-full rounded-xl shadow-xl overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-blue-500 dark:bg-green-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
            ></div>
            <img
              src="https://normannuthu.netlify.app/assets/images/portfolio.png"
              alt="Norman Nuthu"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
