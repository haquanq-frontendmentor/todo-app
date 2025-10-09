<script setup lang="ts">
import { useTodoStore } from "../../stores/todoStore";
import TodoFilter from "./TodoFilter.vue";

const { getFilteredTodos, removeCompleted } = useTodoStore();
</script>

<template>
  <div
    class="flex items-center justify-between px-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] pt-[1.1875rem] pb-[1.0625rem] text-xs font-medium tracking-[-0.02em] text-gray-600 sm:text-sm dark:text-purple-600"
  >
    <p class="leading-none">{{ `${getFilteredTodos().filter((v) => !v.completed).length} items left` }}</p>
    <div
      class="dark:bg-navy-900 absolute top-[calc(100%+1rem)] right-0 left-0 flex justify-center rounded-md bg-white py-4 shadow-lg sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:p-0"
    >
      <TodoFilter />
    </div>
    <button
      class="hover:text-navy-950 focus-v transition-colors dark:hover:text-white"
      type="button"
      @click="removeCompleted"
    >
      Clear Completed
    </button>
  </div>
</template>
