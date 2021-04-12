<template>
  <AddTask v-if="showAddTask" @task-created="addTask" />

  <TaskList
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  components: {
    AddTask,
    TaskList,
  },
  props: {
    showAddTask: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        const res = await fetch(`api/tasks/${id}`, { method: "DELETE" });

        res.status === 200
          ? this.initList()
          : alert("Task could not be deleted");
      }
    },
    async toggleReminder(id) {
      const toggleTask = await this.fetchTask(id);
      const updatedTask = { ...toggleTask, reminder: !toggleTask.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      res.status === 200 ? this.initList() : alert("Task could not be updated");
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");

      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();
      return data;
    },
    async addTask(task) {
      await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      this.initList();
    },
    async initList() {
      this.tasks = await this.fetchTasks();
    },
  },
  created() {
    this.initList();
  },
};
</script>

<style>
</style>