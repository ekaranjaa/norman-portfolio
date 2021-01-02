<template>
  <article>
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10">
      <div class="mb-5 md:mb-10 flex items-center">
        <h1 class="text-4xl font-bold whitespace-nowrap">About Me</h1>
        <span class="ml-4 h-px w-64 bg-gray-500"></span>
      </div>
      <div class="md:grid grid-cols-2">
        <div class="text-sm leading-6">
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
          <ul class="mt-4 grid grid-cols-2">
            <li>Java</li>
            <li>Kotlin</li>
            <li>Go</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="mt-6 md:mt-0">
          <div
            class="mx-auto relative h-80 w-full md:w-72 rounded-xl shadow-xl overflow-hidden"
          >
            <span
              class="absolute inset-0 bg-blue-500 bg-opacity-50 transition duration-300 hover:bg-opacity-0"
            ></span>
            <img
              src="https://normannuthu.netlify.app/assets/images/portfolio.png"
              alt="Norman Nuthu"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>
