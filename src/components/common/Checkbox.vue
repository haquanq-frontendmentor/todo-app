<script setup lang="ts">
import { CheckIcon } from "../../assets/images";

const { label, checked } = defineProps<{ label: string; checked?: boolean; name: string }>();
const model = defineModel();
</script>

<template>
  <label
    class="group focus-w relative block aspect-square w-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] shrink-0 cursor-pointer rounded-full"
  >
    <span class="sr-only">{{ label }}</span>
    <input class="peer sr-only" type="checkbox" :checked="checked" v-model="model" />
    <span
      class="pointer-events-none flex h-full w-full items-center justify-center rounded-[inherit] [background:var(--gradient)]"
    >
      <img class="w-[0.625rem] pt-[1px] pl-[1px]" :src="CheckIcon" alt="" />
    </span>
    <span
      class="dark:bg-navy-900 absolute inset-0 z-20 rounded-[inherit] bg-white outline-2 -outline-offset-2 outline-gray-300 transition-[outline-color,opacity] peer-checked:opacity-0 hover:outline-blue-500 dark:outline-purple-800"
    ></span>
  </label>
</template>
