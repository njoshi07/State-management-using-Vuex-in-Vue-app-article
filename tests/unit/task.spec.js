import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

describe("tests for Task ", () => {
  it("does compoent has task", async () => {
    const wrapper = shallowMount(Task);
    expect(wrapper.classes("taskDetail")).toBe(true);
  });

  //   Props Testing
  it("testing props value", () => {
    const wrapper = shallowMount(Task, {
      propsData: {
        taskDesc: "bazz",
        index: 1,
      },
    });

    expect(wrapper.props().taskDesc).toBe("bazz");
    expect(wrapper.props().index).toBe(1);
  });
});
