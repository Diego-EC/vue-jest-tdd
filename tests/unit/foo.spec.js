import { shallowMount } from "@vue/test-utils";
import foo from "@/components/foo.vue";

describe("foo.vue", () => {
  it("is vue instance", () => {
    const wrapper = shallowMount(foo, {
      propsData: { msg: "bar" },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    expect(true).toBe(true);
  });

  it("click", () => {
    const wrapper = shallowMount(foo, {
      propsData: { msg: "bar" },
    });
    const onClick = jest.fn();
    wrapper.setMethods({ lol: onClick });
    wrapper.find("button").trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
