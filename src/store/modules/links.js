import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe, faEnvelope, faN } from "@fortawesome/free-solid-svg-icons";

// 示範數據，實際應用可以連接到 API
const state = {
  profileData: {
    name: "阿保保",
    bio: "前端開發者 | 網頁設計 | 社工",
    avatar: null, // 可以使用 require('@/assets/avatar.jpg') 或 URL
  },
  links: [
    {
      id: 1,
      title: "Stupid Cat 網站",
      description: "React、Tailwind CSS、vercel部署、API整合",
      url: "https://funnywebsitegoodapi.vercel.app/",
      icon: faGlobe,
      index: 0,
    },
    {
      id: 2,
      title: "GitHub",
      description: "探索我的程式碼專案",
      url: "https://github.com/yourusername",
      icon: faGithub,
      index: 1,
    },
    {
      id: 3,
      title: "LinkedIn",
      description: "我的專業網絡",
      url: "https://linkedin.com/in/yourusername",
      icon: faLinkedin,
      index: 2,
    },
    {
      id: 4,
      title: "Notion",
      description: "學歷過程",
      url: "https://chihpao.notion.site/120daaa899518090a0e8ffef49017ccc",
      icon: faN,
      index: 3,
    },
    {
      id: 5,
      title: "Instagram",
      description: "生活紀實",
      url: "https://instagram.com/yourusername",
      icon: faInstagram,
      index: 4,
    },
    {
      id: 6,
      title: "聯絡我",
      description: "chihpaoo@gmail.com",
      url: "mailto:chihpaoo@gmail.com",
      icon: faEnvelope,
      index: 5,
    },
  ],
  loading: false,
  error: null,
};

const getters = {
  allLinks: (state) => state.links,
  profile: (state) => state.profileData,
};

const actions = {
  // 模擬從 API 獲取數據
  async fetchLinks({ commit }) {
    commit("setLoading", true);
    try {
      // 實際應用中，這裡會是 API 請求
      // const response = await axios.get('/api/links');
      // commit('setLinks', response.data);

      // 模擬 API 延遲
      await new Promise((resolve) => setTimeout(resolve, 500));
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error.message);
      commit("setLoading", false);
    }
  },
  // 其他可能的操作，如更新個人資料
  updateProfile({ commit }, profileData) {
    // 實際應用中，這裡會有 API 請求
    commit("setProfile", profileData);
  },
};

const mutations = {
  setLinks(state, links) {
    state.links = links;
  },
  setProfile(state, profileData) {
    state.profileData = profileData;
  },
  setLoading(state, status) {
    state.loading = status;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
