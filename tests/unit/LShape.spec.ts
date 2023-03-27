import { shallowMount } from "@vue/test-utils";
import LShape from "@/components/LShape";

describe("LShape", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(LShape);
    expect(wrapper.exists()).toBe(true);
  });
});
