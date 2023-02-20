import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Task from "@/components/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("tests for Task ", () => {
  let store;
  let state;
  let mutations;

  // **** Mocking process **** //
  beforeEach(() => {
    state = {
      TasksLists: [
        { id: 1, title: "task 1", completed: false },
        { id: 1, title: "task 1", completed: false },
      ],
    };
    mutations = {
      pullTasks: jest.fn(),

      DeleteTask: jest.fn(),
    };

    store = new Vuex.Store({ mutations });
  });

  // *****

  it("does compoent has task", async () => {
    const wrapper = shallowMount(Task);
    expect(wrapper.classes("taskDetail")).toBe(true);
  });

  // Testing Props
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

  // Testing Mutation

  it("delete task when you click on delete button", async () => {
    const wrapper = shallowMount(Task, {
      store,
      localVue,
    });

    await wrapper.find("button").trigger("click");
    expect(mutations.DeleteTask).toBeCalled();
  });
});
