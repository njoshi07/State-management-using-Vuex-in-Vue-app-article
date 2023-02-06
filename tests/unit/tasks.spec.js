import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Tasks from "@/components/Tasks.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Test Actions on vuex", () => {
  let store;
  let state;
  let mutations;
  let getters;
  let actions;

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
    };
    actions = {
      fetchTasks: jest.fn(),
    };
    getters = {
      updatedTasksList: jest.fn(),
    };

    store = new Vuex.Store({ mutations, actions, getters });
  });

  // *****

  it("dispatches an action from vuex store when component created", () => {
    shallowMount(Tasks, {
      store,
      localVue,
    });
    expect(actions.fetchTasks).toBeCalled();
  });
});
