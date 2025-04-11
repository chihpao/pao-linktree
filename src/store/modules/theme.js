const state = {
  darkMode: false,
};

const getters = {
  isDarkMode: (state) => state.darkMode,
};

const actions = {
  toggleDarkMode({ commit, state }) {
    commit("setDarkMode", !state.darkMode);
    // 保存用戶偏好
    localStorage.setItem("darkMode", !state.darkMode);

    // 設置 CSS 變數
    document.documentElement.setAttribute(
      "data-theme",
      !state.darkMode ? "dark" : "light"
    );
  },

  initTheme({ commit }) {
    // 檢查本地儲存的主題偏好
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme !== null) {
      const isDarkMode = savedTheme === "true";
      commit("setDarkMode", isDarkMode);
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
    } else {
      // 檢查系統偏好
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      commit("setDarkMode", prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }
  },
};

const mutations = {
  setDarkMode(state, isDarkMode) {
    state.darkMode = isDarkMode;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
