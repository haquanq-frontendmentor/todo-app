<script setup lang="ts">
import { TODO_STATUS_FILTERS } from "../../stores/todoStore";
import TodoFilterOption from "./TodoFilterOption.vue";
</script>

<template>
  <fieldset class="text-sm font-bold tracking-[-0.01em]">
    <legend class="sr-only">Filter todo statuses</legend>
    <div class="flex gap-[1.125rem]">
      <TodoFilterOption label="All" :checked="true" :value="TODO_STATUS_FILTERS.ALL" />
      <TodoFilterOption label="Active" :value="TODO_STATUS_FILTERS.ACTIVE" />
      <TodoFilterOption label="Completed" :value="TODO_STATUS_FILTERS.COMPLETED" />
    </div>
  </fieldset>
</template>
