import { shallowMount } from "@vue/test-utils";
import LinkCard from "@/components/LinkCard.vue";

describe("LinkCard.vue", () => {
  it("renders props.link when passed", () => {
    const link = {
      id: 1,
      title: "Test Link",
      description: "Test Description",
      url: "https://example.com",
      icon: ["fab", "github"],
      index: 0,
    };

    const wrapper = shallowMount(LinkCard, {
      propsData: { link },
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    expect(wrapper.text()).toContain("Test Link");
    expect(wrapper.text()).toContain("Test Description");
    expect(wrapper.find("a").attributes("href")).toBe("https://example.com");
  });
});
