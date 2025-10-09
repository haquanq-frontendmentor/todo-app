<script setup lang="ts">
import TodoAction from "./TodoAction.vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>

<template>
  <section
    class="relative grid gap-4 text-[clamp(0.75rem,0.3325rem+1.7812vw,1.1875rem)] tracking-[-0.02em] md:gap-6 md:tracking-[-0.04em]"
  >
    <h2 class="sr-only">Your todos</h2>
    <p
      class="absolute top-[calc(100%+6.6875rem)] right-0 left-0 text-center text-sm leading-none font-medium tracking-[-0.02em] text-gray-600 md:top-[calc(100%+3.25rem)] dark:text-purple-600"
    >
      Drag and drop to reorder list
    </p>
    <TodoForm />

    <div class="dark:bg-navy-900 relative rounded-md bg-white shadow-lg">
      <TodoList />
      <TodoAction />
    </div>
  </section>
</template>
