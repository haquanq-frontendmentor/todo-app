<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../../stores/todoStore";
import TodoItem from "./TodoItem.vue";

const { removeTodo, getFilteredTodos } = useTodoStore();

const todos = computed(() => getFilteredTodos());
</script>

<template>
  <ul class="text-navy-900 rounded-md *:first:rounded-t-md dark:text-purple-300">
    <TodoItem
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index + todo.content"
      @remove-click="removeTodo(index)"
    />
    <li
      class="flex h-50 items-center justify-center border-b border-gray-300 px-4 text-center text-base leading-6 dark:border-purple-600"
      v-if="todos.length === 0"
    >
      <p class="max-w-40">It feels empty here! 🤖 Lets add a todo!</p>
    </li>
  </ul>
</template>
