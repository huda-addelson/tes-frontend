<template>
  <nav
    class="py-3 fixed left-0 right-0 top-0 z-50 transition-all duration-200"
    :class="{ 'bg-white shadow-md py-5': isBackgroundVisible }">
    <div class="container mx-auto hidden md:flex justify-between items-center">
      <div class="flex items-center gap-1">
        <img src="/image/logo.svg" alt="logo" />
        <span class="font-bold text-base">Logoipsum</span>
      </div>
      <div class="flex space-x-10">
        <ul v-for="item in itemNav" class="text-base font-extralight">
          <router-link
            class="cursor-pointer hover:text-primary transition-all duration-200"
            :to="item.link">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
      <div class="flex gap-10 items-center">
        <router-link to="/login" class="text-base font-semibold"
          >Sign In</router-link
        >
        <Button text="Sign Up" :bg="false" link="/login" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import Button from './Button.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const itemNav = [
  { id: '1', name: 'Home', link: '/' },
  { id: '2', name: 'Product', link: '/' },
  { id: '3', name: 'Blog', link: '/' },
  { id: '4', name: 'Pricing', link: '/' },
  { id: '5', name: 'Contact', link: '/' },
  { id: '6', name: 'About Us', link: '/about' },
];

const isBackgroundVisible = ref(false);

const handleScroll = () => {
  return window.scrollY > 50
    ? (isBackgroundVisible.value = true)
    : (isBackgroundVisible.value = false);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
