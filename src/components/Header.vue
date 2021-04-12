<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-if="isHomePage"
      @btn-click="$emit('btn-click')"
      :color="showAddTask ? 'red' : 'green'"
      :text="showAddTask ? 'Hide' : 'Add'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Header Component Title",
    },
    showAddTask: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
  computed: {
    isHomePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  emits: ["btn-click"],
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>