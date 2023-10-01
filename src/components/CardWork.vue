<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-10 section lg:px-40">
    <div
      class="text-center flex items-center flex-col px-7 py-[50px] border border-[#E9EBF0] rounded-[20px] cursor cursor-pointer hover:border-primary transition-all duration-200"
      v-for="item in items">
      <img :src="item.image" :alt="item.text" class="mb-[50px]" />
      <h3 class="mb-3">{{ item.text }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>
