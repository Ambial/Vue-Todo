<template>
  <div class="container">
    <Header
      @btn-click="showAddTask = !showAddTask"
      :showAddTask="showAddTask"
      title="Vue Tasks"
    />

    <AddTask v-if="showAddTask" @task-created="addTaskToList" />

    <TaskList
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    TaskList,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((task) => task.id != id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addTaskToList(newTask) {
      this.tasks.push(newTask);
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Learn Vue",
        day: "April 11th at 8:00pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Authentication",
        day: "April 11th at 10:00pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Encryption",
        day: "April 11th at 10:30pm",
        reminder: false,
      },
    ];
  },
};
</script>
