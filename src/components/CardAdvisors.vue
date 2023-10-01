<template>
  <div class="max-w-[900px] mx-auto flex flex-col md:flex-row gap-6">
    <div
      v-for="item in itemAdvisors"
      class="flex flex-col items-center font-secondary">
      <img
        :src="item.image"
        :alt="item.name"
        class="rounded-[10px] object-cover" />
      <div class="mt-5 mb-[10px] text-[22px] font-medium">{{ item.name }}</div>
      <span class="uppercase text-[14px] font-bold text-[#4F5665]">{{
        item.job
      }}</span>
    </div>
  </div>
</template>

<script setup>
const itemAdvisors = [
  {
    id: '1',
    name: 'Xavier Oswald',
    job: 'co-founder, developer',
    image:
      'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  },
  {
    id: '2',
    name: 'Sara Creighton',
    job: 'co-founder, developer',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  },
  {
    id: '3',
    name: 'Brandon Ogden',
    job: 'project manager',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
  },
];
</script>
