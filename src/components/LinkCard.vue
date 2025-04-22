<template>
  <div
    class="link-card"
    :class="{ animated: animated }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <a :href="link.url" target="_blank" rel="noopener noreferrer">
      <div class="link-content">
        <div class="link-icon" v-if="link.icon">
          <font-awesome-icon :icon="link.icon" />
        </div>
        <div class="link-text">
          <h3>{{ link.title }}</h3>
          <p v-if="link.description">{{ link.description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { gsap } from "gsap";

export default {
  name: "LinkCard",
  components: {
    FontAwesomeIcon,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
      animated: false,
    };
  },
  mounted() {
    // 進場動畫 - 不使用基於索引的延遲，以避免影響間距
    gsap.from(this.$el, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      delay: 0.2, // 固定延遲時間，不使用索引
      ease: "power1.out",
      onComplete: () => {
        this.animated = true;
      },
    });
  },
  watch: {
    hover(newVal) {
      if (newVal) {
        gsap.to(this.$el, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(this.$el, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link-card {
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 58px; /* 確保所有卡片高度一致 */
  width: 100%; /* 確保卡片寬度充滿容器 */

  &:hover {
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 16px;
    text-decoration: none;
    color: var(--text-color);
    height: 100%;
  }

  .link-content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .link-icon {
    margin-right: 15px;
    width: 30px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin: 0 0 2px;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2;
    }

    p {
      margin: 0;
      font-size: 0.8rem;
      opacity: 0.7;
      line-height: 1.2;
    }
  }
}

@media (max-width: 768px) {
  .link-card {
    margin: 10px 0;
    width: 90%; /* 手機版面卡片寬度縮小為90% */
    max-width: 400px;

    .link-text h3 {
      font-size: 0.9rem;
    }

    .link-text p {
      font-size: 0.75rem;
    }
  }
}
</style>
