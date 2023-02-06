<template>
  <div class="enterTask">
    <form action="POST" @submit.prevent="postNewTask()">
      <input class="inputTask" type="text" v-model="EnterNewItem" />
      <button type="submit" class="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    EnterNewItem: {
      get() {
        return this.$store.state.EnterNewTaskItem;
      },
      set(val) {
        return this.$store.commit("EnterTask", val);
      },
    },
  },
  methods: {
    postNewTask() {
      // Dispatch Action here
      console.log("Hi there");
    },
  },
};
</script>
