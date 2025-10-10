<script setup lang="ts">
import { createDraggable } from "../../helpers/createDraggable";
import type { TodoItem } from "../../stores/todoStore";
import Checkbox from "../common/Checkbox.vue";

const { todo, onRemoveClick } = defineProps<{
  todo: TodoItem;
  onRemoveClick: () => void;
}>();

const { moving } = createDraggable("it", { sortable: true });
</script>

<template>
  <li
    class="dark:bg-navy-900 flex items-center gap-[clamp(0.75rem,0.0344rem+3.0534vw,1.5rem)] border-b border-gray-300 bg-white px-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] py-[clamp(1rem,0.7615rem+1.0178vw,1.25rem)] lg:first:pb-[1.1875rem] dark:border-purple-700"
    :class="moving && '_ relative z-[999] cursor-move shadow-xl'"
    ref="it"
  >
    <Checkbox label="Mark as completed" v-model="todo.completed" :name="todo.content.replace(/\s/g, '-')" />
    <p class="w-full pt-[0.1875rem]" :class="todo.completed && 'text-gray-600 line-through dark:text-purple-600'">
      {{ todo.content }}
    </p>
    <button
      class="hover:text-navy-900 focus-v flex aspect-square h-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] shrink-0 items-center justify-center rounded-sm text-gray-600 transition-colors hover:bg-gray-300 dark:text-purple-600 dark:hover:bg-purple-300"
      type="button"
      aria-label="Remove item"
      @click="onRemoveClick"
      @mousedown.stop=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4"
      >
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    </button>
  </li>
</template>
