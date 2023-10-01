<template>
  <div class="container mx-auto text-center section">
    <HeadingTitleVue text="Plans and Pricing" />
    <p class="w-full md:max-w-md mx-auto">
      We provide to you the best choiches for you. The leading political
      campaign intelligence platform
    </p>
    <div
      class="section grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
      <div
        v-for="item in itemPricing"
        class="flex flex-col cursor-pointer justify-between border-2 border-[#E9EBF0] rounded-[10px] p-[50px] hover:border-primary transition duration-300">
        <div>
          <img :src="item.icon" :alt="item.title" class="w-[144px] mx-auto" />
          <h4 class="my-[30px]">{{ item.title }}</h4>
          <div
            v-for="list in item.feature"
            class="flex items-center gap-[10px]">
            <img src="/image/check.svg" alt="" />
            <span class="text-sm font-normal text-[#4F5665]">{{
              list.text
            }}</span>
          </div>
        </div>
        <div class="pt-[90px]">
          <h3 class="mb-[20px]">
            {{ item.price }} / <span class="font-light"> mo</span>
          </h3>
          <Button
            text="Select"
            link="/"
            class="hover:bg-primary hover:text-white transition-all duration-200" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
import HeadingTitleVue from './HeadingTitle.vue';

const itemPricing = [
  {
    id: '1',
    title: 'Individual Plan',
    icon: '/image/pricing-icon.svg',
    price: '$99',
    feature: [
      { id: '1', text: '1 User' },
      { id: '2', text: '1 Basic Analisys' },
      { id: '3', text: 'Unlimited Select Services' },
    ],
  },
  {
    id: '2',
    title: 'Parties Plan',
    icon: '/image/pricing-icon.svg',
    price: '$500',
    feature: [
      { id: '1', text: 'Unlimited User' },
      { id: '2', text: 'Basic Analisys' },
      { id: '3', text: 'Unlimited Select Services' },
      { id: '4', text: 'Free Extend 1 Month' },
    ],
  },
];
</script>
