import { mount } from "@vue/test-utils";
import LText from "@/components/LText";

describe("LText", () => {
  it.only("renders text when passed", () => {
    const text = "hello world";
    const wrapper = mount(LText, {
      props: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it("renders default tag when no tag prop is passed", () => {
    const wrapper = mount(LText);
    expect(wrapper.find("p").exists()).toBe(true);
  });

  describe("when isEditing is true", () => {
    it("renders a button", () => {
      const wrapper = mount(LText, {
        props: { isEditing: true },
      });
      expect(wrapper.find("button").exists()).toBe(true);
    });

    it("emits a click event when button is clicked", async () => {
      const wrapper = mount(LText, {
        props: { isEditing: true },
      });
      await wrapper.find("button").trigger("click");
      expect(wrapper.emitted("edit")).toBeTruthy();
    });
  });
});
