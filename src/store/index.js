import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // ***  STATE  *** //
  state: {
    TasksLists: [],

    DeleteTaskId: "",
  },
  // ***  MUTATIONS  *** //
  mutations: {
    pullTasks(state, payload) {
      state.TasksLists = payload;
    },

    // Delete task
    DeleteTask(state, payload) {
      state.DeleteTaskId = payload;
    },
  },
  // ***  ACTIONS  *** //
  actions: {
    // Make API request
    async fetchTasks({ commit }) {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?&_limit=10"
        )
          .then((res) => res.json())
          .then((data) => data);

        // Commiting mutation to update state
        commit("pullTasks", res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  // ***  GETTERS *** //
  getters: {
    updatedTasksList(state) {
      const result = state.TasksLists.filter(
        (tasklist) => tasklist.id != state.DeleteTaskId
      );
      return (state.TasksLists = result);
    },
  },
  // ***  MODULES *** //
  modules: {}, // To break down big store into smaller stores
});
