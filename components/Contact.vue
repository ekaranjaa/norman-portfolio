<template>
  <section id="contact">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1 class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center">
        Get In Touch
      </h1>
      <div class="mx-auto max-w-sm">
        <div
          class="mb-4 font-bold text-center"
          :class="{
            'text-green-500': status === 'success',
            'text-red-500': status === 'error'
          }"
        >
          <p v-if="status === 'success'">Message sent successfully.</p>
          <p v-if="status === 'error'">
            There was a error submitting the form.
          </p>
        </div>
        <form
          autocomplete="off"
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          @submit.prevent="submitForm"
        >
          <div class="mb-4">
            <input type="hidden" name="form-name" value="contact" />
            <label for="name" class="block">Name</label>
            <input
              id="name"
              v-model="form.name"
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
              v-model="form.email"
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
              v-model="form.message"
              name="message"
              rows="3"
              required
              class="py-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-green-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="mx-auto mt-6 px-6 py-3 block text-blue-500 dark:text-green-400 border-2 border-blue-500 dark:border-green-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-green-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-green-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
            :class="{ 'pointer-events-none': working }"
          >
            <span v-if="working">Sending...</span>
            <span v-if="!working">Send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      working: false,
      status: null,
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    submitForm() {
      this.working = true;

      const headers = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      };
      this.$axios
        .$post(
          '/',
          this.encode({
            'form-name': 'ask-question',
            ...this.form
          }),
          headers
        )
        .then(() => {
          this.status = 'success';
          this.working = false;

          this.form.name = null;
          this.form.email = null;
          this.form.message = null;
        })
        .catch((err) => {
          this.status = 'error';
          this.working = false;
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
};
</script>
