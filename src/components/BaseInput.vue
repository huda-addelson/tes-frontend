<template>
  <div>
    <div>{{ data }}</div>
    <input type="text" v-model="data" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref();
</script>
