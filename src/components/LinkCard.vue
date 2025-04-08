<template>
  <div 
    class="link-card"
    :class="{ 'animated': animated }"
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { gsap } from 'gsap';

export default {
  name: 'LinkCard',
  components: {
    FontAwesomeIcon
  },
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      animated: false
    };
  },
  mounted() {
    // 進場動畫
    gsap.from(this.$el, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: this.$props.link.index * 0.1,
      onComplete: () => {
        this.animated = true;
      }
    });
  },
  watch: {
    hover(newVal) {
      if (newVal) {
        gsap.to(this.$el, {
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(this.$el, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link-card {
  margin: 12px 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    display: block;
    padding: 16px;
    text-decoration: none;
    color: var(--text-color);
  }
  
  .link-content {
    display: flex;
    align-items: center;
  }
  
  .link-icon {
    margin-right: 15px;
    width: 30px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--accent-color);
  }
  
  .link-text {
    flex: 1;
    
    h3 {
      margin: 0 0 4px;
      font-size: 1rem;
      font-weight: 600;
    }
    
    p {
      margin: 0;
      font-size: 0.8rem;
      opacity: 0.7;
    }
  }
}

@media (max-width: 768px) {
  .link-card {
    margin: 10px 0;
    
    .link-text h3 {
      font-size: 0.9rem;
    }
    
    .link-text p {
      font-size: 0.75rem;
    }
  }
}
</style>