<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      isDarkMode: "theme/isDarkMode",
    }),
  },
  created() {
    this.initTheme();
  },
  methods: {
    ...mapActions({
      initTheme: "theme/initTheme",
    }),
  },
};
</script>

<style lang="scss">
// 全局 CSS 變數
:root {
  --bg-color: #f5f7fa;
  --card-bg: #ffffff;
  --text-color: #333333;
  --accent-color: #4a6cf7;
  --border-color: #eaeaea;
  --shadow-color: rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] {
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --text-color: #e0e0e0;
  --accent-color: #6c8fff;
  --border-color: #333333;
  --shadow-color: rgba(0, 0, 0, 0.2);
}

* {
  transition: background-color 0.3s ease, color 0.3s ease;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }
}
</style>
