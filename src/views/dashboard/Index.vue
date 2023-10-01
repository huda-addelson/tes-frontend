<template>
  <section class="flex">
    <Sidebar :sidebar="sidebar" />
    <div class="relative w-full max-h-screen">
      <div class="absolute top-0 left-0 px-10 py-5">
        <img src="/image/icon-menu.svg" alt="icon-menu" />
      </div>
      <div class="absolute top-0 right-0 px-10 py-5">
        <img
          :src="profile"
          alt="icon-menu"
          class="w-10 h-10 rounded-full cursor-pointer" />
      </div>
      <router-view class="px-10 pt-40 bg-[#f5f6fa] w-full min-h-screen" />
    </div>
  </section>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue';

const profile = localStorage.getItem('image');

const sidebar = [
  { id: '1', label: 'Dashboard', link: '/dashboard/' },
  { id: '2', label: 'Users', link: '/dashboard/users' },
];
</script>
