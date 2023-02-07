<template>
  <div class="tasksDisplay">
    <ul class="tasksList">
      <li
        class="taskListItem"
        v-for="TaskList in updatedTasksList"
        :key="TaskList.id"
      >
        <Task :taskDesc="TaskList.title" :index="TaskList.id"></Task>
      </li>
    </ul>
  </div>
</template>

<script>
import Task from "./Task.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Task,
  },
  computed: {
    ...mapGetters(["updatedTasksList"]),
    ...mapActions(["fetchTasks"]),
  },
  created() {
    this.fetchTasks; // Calling Vuex Action here ,So API calls and fetch all data before component mount
  },
};
</script>
