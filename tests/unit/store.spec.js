import { createStore } from "vuex";
import linksModule from "@/store/modules/links";

describe("Vuex Store", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      modules: {
        links: {
          ...linksModule,
          namespaced: true,
        },
      },
    });
  });

  it("should have initial state", () => {
    expect(store.state.links.links.length).toBeGreaterThan(0);
    expect(store.state.links.profileData).toBeDefined();
    expect(store.state.links.loading).toBe(false);
  });

  it("should update loading state", () => {
    store.commit("links/setLoading", true);
    expect(store.state.links.loading).toBe(true);
  });

  it("should update profile data", () => {
    const newProfile = {
      name: "Test User",
      bio: "Test Bio",
      avatar: "test.jpg",
    };

    store.commit("links/setProfile", newProfile);
    expect(store.state.links.profileData).toEqual(newProfile);
  });
});
