export const state = () => ({
  theme: null
});

export const getters = {
  theme: (state) => state.theme
};

export const mutations = {
  SET_THEME(state, payload) {
    state.theme = payload;
  }
};

export const actions = {
  setTheme({ commit }, theme = null) {
    if (process.browser) {
      let currentTheme = 'light';

      if (localStorage.getItem('theme') !== null) {
        currentTheme = localStorage.getItem('theme');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      }

      if (theme === null) {
        theme = currentTheme;
      }

      if (theme === 'dark') {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#121827');
        document.documentElement.classList.add('dark');
      } else {
        document
          .querySelector('meta[name=theme-color]')
          .setAttribute('content', '#406bc7');
        document.documentElement.classList.remove('dark');
      }

      commit('SET_THEME', theme);
      localStorage.setItem('theme', theme);
    }
  }
};
