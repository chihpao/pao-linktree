<template>
  <button
    class="theme-toggle"
    @click="toggleDarkMode"
    aria-label="Toggle dark mode"
  >
    <font-awesome-icon :icon="isDarkMode ? 'sun' : 'moon'" />
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMoon, faSun);

export default {
  name: "ThemeToggle",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters({
      isDarkMode: "theme/isDarkMode",
    }),
  },
  methods: {
    ...mapActions({
      toggleDarkMode: "theme/toggleDarkMode",
    }),
  },
};
</script>

<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--card-bg);
  color: var(--accent-color);
  border: none;
  box-shadow: 0 2px 8px var(--shadow-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
  }

  &:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
    position: absolute;
  }
}
</style>
