<template>
  <div id="app">
    <EnterTask></EnterTask>
    <Tasks></Tasks>
  </div>
</template>

<script>
import EnterTask from "./components/EnterTask.vue";
import Tasks from "./components/Tasks.vue";

export default {
  components: {
    EnterTask,
    Tasks,
  },
};
</script>
