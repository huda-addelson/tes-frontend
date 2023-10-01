<template>
  <div class="grid lg:grid-cols-6 h-screen gap-1 lg:gap-0">
    <!-- Left Side -->
    <div
      class="bg-[#F5F6FA] col-span-6 lg:col-span-2 flex flex-col justify-between">
      <div class="p-[60px] flex items-center gap-1">
        <img src="/image/logo.svg" alt="logo" />
        <span class="font-bold text-base">Logoipsum</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img src="/image/login-icon.svg" alt="loginicon" />
        <div class="text-[24px] font-medium">Services</div>
        <p class="max-w-[400px] text-center mt-2">
          An expert team help you to analyze your polticalt power.An expert team
          .
        </p>
      </div>
      <span class="px-6 py-11 text-[14px] font-light text-[#4F5665]"
        >©2020 All Rights Reserved. PT Indonesia Indicator</span
      >
    </div>
    <!-- Right Side -->
    <div
      class="col-span-6 lg:col-span-4 flex flex-col justify-center min-w-full lg:min-w-[450px] mx-auto px-5 section">
      <h3>Welcome to Logo ipsum</h3>
      <p class="mt-1">
        Dont' have an account?
        <span class="text-lg text-primary font-semibold ml-1"
          ><router-link to="/">Sign Up</router-link></span
        >
      </p>
      <form class="flex flex-col gap-6 mt-10" @submit.prevent="handleSubmit()">
        <div class="flex flex-col gap-1">
          <label for="username"
            >Username<span class="text-primary">*</span></label
          >
          <input
            id="username"
            type="text"
            class="w-full border border-[#D9D9D9] rounded-md p-3"
            v-model="payload.username" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="password"
            >Password<span class="text-primary">*</span></label
          >
          <input
            id="password"
            type="password"
            class="w-full border border-[#D9D9D9] rounded-md p-3"
            v-model="payload.password" />
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" />
          <span class="text-sm font-light text-[#4F5665B8]">Remember Me</span>
        </div>
        <button
          type="submit"
          class="bg-primary text-white py-3 rounded-md text-base font-semibold">
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const $toast = useToast();

const router = useRouter();

const payload = reactive({
  username: '',
  password: '',
});

const handleSubmit = () => {
  axios
    .post('https://dummyjson.com/auth/login', payload)
    .then((data) => {
      localStorage.setItem('image', data?.data?.image);
      localStorage.setItem('name', data?.data?.username);
      localStorage.setItem('email', data?.data?.email);
      $toast.success('Berhasil Login', { position: 'top' });
      router.push('/dashboard');
    })
    .catch((err) => {
      $toast.error(err?.response?.data?.message, { position: 'top' });
    });
};
</script>
