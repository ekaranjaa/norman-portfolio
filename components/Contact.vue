<template>
  <section id="contact">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1 class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center">
        Get In Touch
      </h1>
      <div class="mx-auto max-w-sm">
        <form autocomplete="off" name="contact" method="POST" action="/success">
          <div class="mb-4">
            <label for="name" class="block">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              class="py-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-green-400 outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="py-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-green-400 outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              class="py-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-green-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="mx-auto mt-6 px-6 py-3 block text-blue-500 dark:text-green-400 border-2 border-blue-500 dark:border-green-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-green-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
