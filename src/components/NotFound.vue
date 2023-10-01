<template>
  <Navbar />
  <div
    class="flex flex-col-reverse md:flex-row h-screen w-full items-center justify-center md:justify-between container gap-10 md:gap-0 mx-auto">
    <div class="flex flex-col gap-4 ml-0 xl:ml-20">
      <h3 class="font-medium">
        Ooops! <br />
        Page Not Found
      </h3>
      <p>
        This page doesn`t exist or was removed <br />We suggest you back to home
      </p>
      <Button text="Learn More" :bg="true" link="/" class="w-fit" />
    </div>
    <div><img src="/image/notfound.svg" alt="" /></div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import Navbar from './Navbar.vue';
</script>
