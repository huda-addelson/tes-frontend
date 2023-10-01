<template>
  <footer class="bg-[#F8F8F8]">
    <div class="grid grid-cols-12 section container mx-auto gap-5 md:gap-10">
      <div
        class="flex flex-col col-span-12 md:col-span-6 lg:col-span-5 gap-6 md:gap-[30px]">
        <div><img src="/image/footer-logo.svg" alt="footerlogo" /></div>
        <p class="max-w-xs">
          <span class="font-medium">Geolabs</span> is a private virtual network
          that has unique features and has high security.
        </p>
        <div class="text-[#AFB5C0]">©2020EBDESK</div>
      </div>
      <div class="flex flex-col col-span-6 lg:col-span-2 mt-5 md:mt-0">
        <h4 class="text-[18px] font-medium mb-5">Product</h4>
        <div class="flex flex-col gap-[10px]">
          <router-link
            to="/"
            v-for="product in ProductItem"
            class="font-light text-[#4F5665]"
            >{{ product.name }}</router-link
          >
        </div>
      </div>
      <div class="flex flex-col col-span-6 lg:col-span-3 mt-5 md:mt-0">
        <h4 class="text-[18px] font-medium mb-5">Engage</h4>
        <div class="flex flex-col gap-[10px]">
          <router-link
            to="/"
            v-for="engage in EngageItem"
            class="font-light text-[#4F5665]"
            >{{ engage.name }}</router-link
          >
        </div>
      </div>
      <div
        class="flex flex-col col-span-12 md:col-span-6 lg:col-span-2 mt-5 md:mt-0">
        <h4 class="text-[18px] font-medium mb-5">Earn Money</h4>
        <div class="flex flex-col gap-[10px]">
          <router-link
            to="/"
            v-for="earn in EarnMoney"
            class="font-light text-[#4F5665]"
            >{{ earn.name }}</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const ProductItem = [
  { id: '1', name: 'Download' },
  { id: '2', name: 'Pricing' },
  { id: '3', name: 'Locations' },
  { id: '4', name: 'Server' },
  { id: '5', name: 'Countries' },
  { id: '6', name: 'Blog' },
];
const EngageItem = [
  { id: '1', name: 'Geolabs ?' },
  { id: '2', name: 'FAQ' },
  { id: '3', name: 'Tutorials' },
  { id: '4', name: 'About Us' },
  { id: '5', name: 'Privacy Policy' },
  { id: '6', name: 'Terms of Service' },
];
const EarnMoney = [
  {
    id: '1',
    name: 'Affiliate',
  },
  {
    id: '2',
    name: 'Become Partner',
  },
];
</script>
