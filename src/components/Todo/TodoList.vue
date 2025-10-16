<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { useTodoStore } from "../../stores/todoStore";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();

const dragging = ref<boolean>(false);

const { todos } = storeToRefs(todoStore);
</script>

<template>
  <ul class="text-navy-900 rounded-md *:first:rounded-t-md dark:text-purple-300" :class="dragging && 'select-none'">
    <VueDraggableNext
      v-model="todos"
      item-key="id"
      tag="transition-group"
      :animation="200"
      @start="dragging = true"
      @end="dragging = false"
    >
      <TodoItem v-for="(todo, index) in todos" :todo="todo" @remove-click="todoStore.removeTodo(index)" />
    </VueDraggableNext>
    <li
      class="flex h-50 items-center justify-center border-b border-gray-300 px-4 text-center text-base leading-6 dark:border-purple-600"
      v-if="todos.length === 0"
    >
      <p class="max-w-40">It feels empty here! 🤖 Lets add a todo!</p>
    </li>
  </ul>
</template>
