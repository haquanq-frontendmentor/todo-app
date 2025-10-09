<script setup lang="ts">
import { computed } from "vue";
import { MoonIcon, SunIcon } from "../assets/images";
import { useThemeStore } from "../stores/themeStore";

const themeStore = useThemeStore();

const isDarkMode = computed(() => themeStore.isDark());
</script>

<template>
  <header
    class="flex items-center justify-between pt-[clamp(3rem,1.2109rem+7.6336vw,4.875rem)] pb-[clamp(2rem,1.5229rem+2.0356vw,2.5rem)]"
  >
    <span class="text-[clamp(1.75rem,1.0344rem+3.0534vw,2.5rem)] font-bold tracking-[0.37em] text-white uppercase"
      >Todo</span
    >
    <button
      class="rounded-sm focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-gray-50 focus-visible:outline-dashed active:scale-95"
      type="button"
      :aria-pressed="isDarkMode"
      @click="themeStore.cycleThemes"
      aria-label="Turn on dark mode"
    >
      <img v-show="!isDarkMode" :src="MoonIcon" alt="" />
      <img v-show="isDarkMode" :src="SunIcon" alt="" />
    </button>
  </header>
</template>
