<template>
  <div class="taskDetail">
    <h6>{{ taskDesc }}</h6>
    <button class="deleteTask" @click="deleteTask(index)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    taskDesc: String,
    index: Number,
  },
  methods: {
    deleteTask(index) {
      this.$store.commit("DeleteTask", index);
    },
  },
};
</script>
