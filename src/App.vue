<template>
  <div class="container">
    <Header
      @btn-click="showAddTask = !showAddTask"
      :showAddTask="showAddTask"
      title="Vue Tasks"
    />

    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {},
};
</script>
