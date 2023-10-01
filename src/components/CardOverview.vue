<template>
  <div
    class="flex flex-col md:flex-row items-center md:gap-14 section"
    :class="reverse ? 'md:flex-row-reverse' : ''">
    <img :src="image" :alt="title" class="w-[450px]" />
    <div>
      <h2 class="text-white">{{ title }}</h2>
      <p class="my-5 text-white">{{ desc }}</p>
      <Button
        :text="text"
        :link="link"
        :bg="false"
        class="text-white border border-white" />
    </div>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue';

defineProps({
  title: String,
  desc: String,
  image: String,
  text: String,
  reverse: Boolean,
  link: String,
});
</script>
