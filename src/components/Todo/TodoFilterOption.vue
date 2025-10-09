<script setup lang="ts">
import { storeToRefs } from "pinia";
import type { TodoStatusFilters } from "../../stores/todoStore";
import { useTodoStore } from "../../stores/todoStore";

const { filter } = storeToRefs(useTodoStore());
const props = defineProps<{ label: string; value: TodoStatusFilters; checked?: boolean }>();
</script>

<template>
  <label class="hover:text-navy-950 focus-w block cursor-pointer leading-none dark:hover:text-white">
    <input
      class="peer sr-only"
      type="radio"
      name="todofilter"
      :checked="props.checked"
      :value="value"
      v-model="filter"
    />
    <span class="transition-colors peer-checked:text-blue-500">{{ props.label }}</span>
  </label>
</template>
