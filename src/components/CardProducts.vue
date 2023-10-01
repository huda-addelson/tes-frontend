<template>
  <div
    class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-start lg:px-10 container mx-auto">
    <div
      class="px-[30px] pt-[50px] pb-[70px] border border-[#DDDDDD] rounded-[20px] hover:border-primary cursor-pointer duration-200 transition-all"
      v-for="item in itemsProducts"
      :key="item.id">
      <div><img v-bind:src="item.image" alt="product1" class="w-20" /></div>
      <h3 class="py-3">{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
  <div class="mt-10">
    <Button text="Learn More" :bg="false" link="/" />
  </div>
</template>

<script setup>
import Button from './Button.vue';
const itemsProducts = [
  {
    id: '1',
    title: 'Data',
    desc: 'The biggest regional data, development, and POI data.',
    image: '/image/product-icon1.svg',
  },
  {
    id: '2',
    title: 'Technology',
    desc: 'Geospatial platform with advanced analysis that suit your neetds.',
    image: '/image/product-icon2.svg',
  },
  {
    id: '3',
    title: 'Services',
    desc: 'An expert team help you to analyze your poltical power.',
    image: '/image/product-icon3.svg',
  },
];
</script>
