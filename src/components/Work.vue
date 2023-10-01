<template>
  <div class="container mx-auto section text-center">
    <div>
      <HeadingTitle text="How it works for you?" />
      <p class="my-5 max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <Button text="See a Demo" :bg="true" link="/" />
    </div>
    <CardWork :items="itemsWork" />
  </div>
</template>

<script setup>
import Button from './Button.vue';
import CardWork from './CardWork.vue';
import HeadingTitle from './HeadingTitle.vue';

const itemsWork = [
  {
    id: '1',
    text: 'Geographic Segmentation',
    desc: 'Consist of creating differend groups of customers based on geographic boundaries',
    image: '/image/work1.svg',
  },
  {
    id: '2',
    text: 'Demographic Segmentation',
    desc: 'Consist of dividing the market through different variables such as age, gender, income, etc',
    image: '/image/work2.svg',
  },
  {
    id: '3',
    text: 'Psychograpich Segmentation',
    desc: 'Consist of creating differend groups of customers based on geographic boundaries',
    image: '/image/work3.svg',
  },
  {
    id: '4',
    text: 'Behavorial Segmentation',
    desc: 'Consist of creating differend groups of customers based on geographic boundaries',
    image: '/image/work4.svg',
  },
];
</script>
