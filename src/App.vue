<script setup lang="ts">
import { BackgroundDesktopDark, BackgroundDesktopLight } from "./assets/images";
import Header from "./components/Header.vue";
import Todo from "./components/Todo/Todo.vue";
import { useThemeStore } from "./stores/themeStore";

const { isDark } = useThemeStore();
</script>

<template>
  <div class="dark:bg-navy-950 relative min-h-screen bg-gray-500 pb-[11.875rem] md:pb-[7.1875rem]">
    <div
      class="absolute top-0 right-0 left-0 h-[clamp(12.5rem,6.5363rem+25.4453vw,18.75rem)] [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
    >
      <img v-show="!isDark()" :src="BackgroundDesktopLight" alt="" />
      <img v-show="isDark()" :src="BackgroundDesktopDark" alt="" />
    </div>
    <div class="relative z-10 mx-auto w-[min(100vw-3rem,33.75rem)] bg-gray-900">
      <Header />
      <main>
        <h1 class="sr-only">Todo App</h1>
        <Todo />
      </main>
    </div>
  </div>
</template>
