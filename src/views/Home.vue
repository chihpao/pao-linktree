<template>
  <div class="home">
    <ThemeToggle />

    <div class="container">
      <div class="content">
        <div v-if="loading" class="loading-spinner">
          <div class="spinner"></div>
          <p>載入中...</p>
        </div>

        <template v-else>
          <ProfileHeader :profileData="profile" />
          <SocialLinks />

          <div class="links-container">
            <LinkCard v-for="link in allLinks" :key="link.id" :link="link" />
          </div>

          <footer>
            <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
          </footer>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import ProfileHeader from "@/components/ProfileHeader.vue";
import LinkCard from "@/components/LinkCard.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

export default {
  name: "HomeView",
  components: {
    ProfileHeader,
    LinkCard,
    SocialLinks,
    ThemeToggle,
  },
  computed: {
    ...mapGetters({
      allLinks: "links/allLinks",
      profile: "links/profile",
    }),
    ...mapState({
      loading: (state) => state.links.loading,
      error: (state) => state.links.error,
    }),
  },
  created() {
    this.fetchLinks();
  },
  methods: {
    ...mapActions({
      fetchLinks: "links/fetchLinks",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 60px 0 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.links-container {
  margin: 5px 0;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

footer {
  margin-top: auto;
  padding: 20px 0;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.7;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-top-color: var(--accent-color);
    border-radius: 50%;
    animation: spinner 0.8s linear infinite;
  }

  p {
    margin-top: 15px;
    opacity: 0.7;
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .content {
    padding: 50px 0 30px;
  }

  .links-container {
    max-width: 100%;
    padding: 0 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .loading-spinner .spinner {
    width: 30px;
    height: 30px;
  }
}
</style>
