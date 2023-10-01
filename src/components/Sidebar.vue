<template>
  <div class="min-w-[240px] bg-[#2A3042] min-h-screen p-6 flex flex-col gap-10">
    <div class="flex items-center gap-1">
      <img src="/image/logo.svg" alt="logo" />
      <span class="font-bold text-base text-white">Logoipsum</span>
    </div>
    <div class="flex flex-col">
      <router-link
        :to="item.link"
        v-for="item in sidebar"
        :key="item.id"
        :class="{ 'bg-gray-800 text-white': item.id === activeIndex }"
        @click="setActiveIndex(item.id)"
        class="cursor-pointer hover:bg-gray-700 text-[#A6B0CF] text-[13px] font-light py-2 px-4"
        >{{ item.label }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

defineProps({
  sidebar: {
    type: Array,
    required: true,
  },
});

const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>
