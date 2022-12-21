<template>
  <div class="taskDetail">
    <h6>{{ taskDesc }}</h6>
    <button class="deleteTask" @click="deleteTasks(index)">X</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    taskDesc: String,
    index: Number,
  },
  methods: {
    ...mapMutations(["DeleteTask"]),
    deleteTasks(index) {
      this.DeleteTask(index);
    },
  },
};
</script>
