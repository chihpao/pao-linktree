<template>
  <div class="profile-header">
    <div class="profile-avatar" ref="avatarEl">
      <img
        :src="profileData.avatar || require('@/assets/Pao_avatar_small.png')"
        alt="Profile Avatar"
      />
    </div>
    <div class="profile-info" ref="infoEl">
      <h1>{{ profileData.name }}</h1>
      <p>{{ profileData.bio }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ProfileHeader",
  props: {
    profileData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // 入場動畫序列
    const tl = gsap.timeline();

    tl.from(this.$refs.avatarEl, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }).from(
      this.$refs.infoEl,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    );
  },
};
</script>

<style lang="scss" scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  padding: 20px;
  text-align: center;

  .profile-avatar {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-info {
    h1 {
      font-size: 1.8rem;
      margin: 0 0 8px;
    }

    p {
      font-size: 1rem;
      margin: 0;
      opacity: 0.8;
      max-width: 80%;
      margin: 0 auto;
    }
  }
}

@media (max-width: 768px) {
  .profile-header {
    padding: 15px;

    .profile-avatar {
      width: 80px;
      height: 80px;
    }

    .profile-info {
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
