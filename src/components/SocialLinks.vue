<template>
  <div class="social-links" ref="socialLinksEl">
    <a
      v-for="icon in socialIcons"
      :key="icon.name"
      :href="icon.url"
      :aria-label="icon.name"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
    >
      <font-awesome-icon :icon="icon.icon" />
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";

export default {
  name: "SocialLinks",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      socialIcons: [
        {
          name: "GitHub",
          icon: faGithub,
          url: "https://github.com/yourusername",
        },
        {
          name: "Twitter",
          icon: faTwitter,
          url: "https://twitter.com/yourusername",
        },
        {
          name: "LinkedIn",
          icon: faLinkedin,
          url: "https://linkedin.com/in/yourusername",
        },
        {
          name: "Instagram",
          icon: faInstagram,
          url: "https://instagram.com/yourusername",
        },
      ],
    };
  },
  mounted() {
    // 社交圖標彈跳進場動畫
    gsap.from(this.$el.querySelectorAll(".social-icon"), {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
  },
};
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  margin: 0;
  gap: 10px;

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--card-bg);
    color: var(--accent-color);
    box-shadow: 0 2px 6px var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
    font-size: 0.8rem;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 10px var(--shadow-color);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
}

@media (max-width: 768px) {
  .social-links {
    gap: 12px;

    .social-icon {
      width: 35px;
      height: 35px;
      font-size: 0.9rem;
    }
  }
}
</style>
