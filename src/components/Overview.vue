<template>
  <div class="section">
    <div class="bg-primary section relative">
      <img src="/image/cube.svg" alt="cube" class="absolute top-4 right-4" />
      <div class="container mx-auto md:px-[140px]">
        <CardOverview
          title="App Overview 1"
          desc="Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign. "
          text="Learn More"
          image="/image/overview1.svg"
          :reverse="false"
          link="/" />
        <CardOverview
          title="App Overview 2"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
          text="Learn More"
          image="/image/overview2.svg"
          :reverse="true"
          link="/" />
        <CardOverview
          title="App Overview 3"
          desc="Advanced spatial analysis to understand where and why things happen, identify the target constituency, and optimize the campaign. "
          text="Learn More"
          image="/image/overview3.svg"
          :reverse="false"
          link="/" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardOverview from './CardOverview.vue';
</script>
