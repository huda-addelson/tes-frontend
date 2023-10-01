<template>
  <Navbar />
  <!-- Section Hero  -->
  <div
    class="flex items-center section container mx-auto flex-col md:flex-row gap-10 mt-0 md:mt-32">
    <div class="">
      <h1 class="leading-[70px]">
        Observe Your <span class="font-bold">Power</span>
      </h1>
      <p class="mt-[20px] mb-[53px]">
        Trafalgar provides progressive, and affordable healthcare, accessible on
        mobile and online for everyone
      </p>
      <Button text="See a Demo" :bg="true" link="/about" />
    </div>
    <img src="/image/hero-image.svg" alt="" />
  </div>
  <!-- Section Products -->
  <Products />
  <!-- Section Overview -->
  <Overview />
  <!-- Section Work -->
  <Work />
  <!-- Section Pricing -->
  <Pricing />
  <!-- Section Subscribe -->
  <Subscribe />
  <!-- Section Footer -->
  <Footer />
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';
import Button from '../../components/Button.vue';
import Products from '../../components/Products.vue';
import Overview from '../../components/Overview.vue';
import Work from '../../components/Work.vue';
import Pricing from '../../components/Pricing.vue';
import Subscribe from '../../components/Subscribe.vue';
import Footer from '../../components/Footer.vue';
</script>
