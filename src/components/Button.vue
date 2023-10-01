<template>
  <router-link
    class="text-base font-semibold px-[45px] py-[10px] border border-primary rounded-[55px]"
    v-bind:class="bg ? 'bg-primary text-white' : 'bg-transparent text-primary'"
    v-bind:to="link">
    {{ text }}
  </router-link>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
  bg: {
    type: Boolean,
  },
  link: {
    type: String,
  },
});
</script>
