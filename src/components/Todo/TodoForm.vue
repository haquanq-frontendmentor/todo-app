<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../../stores/todoStore";
import Checkbox from "../common/Checkbox.vue";

const completed = ref<boolean>(false);
const content = ref<string>("");
const { addTodo } = useTodoStore();

const handleSubmit = () => {
  if (content.value === "") return;
  addTodo({ completed: completed.value, content: content.value });
  content.value = "";
};
</script>

<template>
  <form
    class="dark:bg-navy-900 relative flex items-center gap-[clamp(0.75rem,0.0344rem+3.0534vw,1.5rem)] rounded-md bg-white px-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] shadow-lg outline-gray-50 focus-within:outline-[3px] focus-within:outline-offset-[3px] focus-within:outline-gray-50 focus-within:outline-dashed"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <Checkbox label="Mark as completed" v-model="completed" name="new-todo" />
    <label class="w-full">
      <span class="sr-only">Add new todo</span>
      <input
        class="text-navy-900 h-[clamp(3rem,2.0458rem+4.0712vw,4rem)] w-full pt-[0.125rem] outline-none placeholder:text-gray-600 dark:text-purple-300"
        type="text"
        name="new-todo-content"
        placeholder="Create a new todo..."
        v-model="content"
      />
    </label>
    <button
      class="hover:text-navy-900 focus-v aspect-square w-6 shrink-0 rounded-sm text-gray-600 transition-colors hover:bg-gray-300 dark:text-purple-600"
      type="submit"
      aria-label=""
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
      </svg>
    </button>
  </form>
</template>
