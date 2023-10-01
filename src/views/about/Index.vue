<template>
  <div class="relative">
    <Navbar />
    <!-- Hero About -->
    <div
      class="flex flex-col items-center text-center py-7 md:py-36 lg:py-44 bg-primary">
      <div class="absolute top-0 z-0">
        <img src="/image/about-circle.svg" alt="aboutcircle" />
      </div>
      <div class="z-10">
        <h1 class="text-white">About Us</h1>
        <p class="max-w-[567px] text-white mt-2 mb-5 md:mt-[30px] md:mb-[60px]">
          A small company offering data-driven solutions for campaign
          effectiveness using spatial data and detailed analysis of target
          audience (voters). Use technology that unites spatial data science and
          political science.
        </p>
        <Button text="Contact Us" link="/about" class="text-primary bg-white" />
      </div>
    </div>
    <!-- Quote -->
    <div
      class="section mx-auto flex flex-col items-center text-center my-10 relative">
      <div>
        <img
          src="/image/shape-about.svg"
          alt="shape"
          class="absolute right-0 top-0 hidden md:block" />
      </div>
      <div><img src="/image/quote-icon.svg" alt="quoteabout" /></div>
      <h3 class="max-w-[700px] font-normal text-[#4F5665] mt-[30px]">
        In just small steps you’ll connected directly to our technology.
        Knowledge about your own-power, your rivals, your voters, and your
        region in Election.
      </h3>
    </div>
    <!-- Advisors -->
    <div class="container section mx-auto">
      <div class="text-center text-[42px] font-semibold mb-[60px]">
        Our Advisors
      </div>
      <Advisors />
    </div>
    <!-- Political Say -->
    <div
      class="container section mx-auto text-center flex flex-col items-center">
      <h2>What Political Figure Say</h2>
      <p class="max-w-[555px] mt-5">
        These are the stories of political figure who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '850': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '1200': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="container mx-auto mt-[60px]">
        <SwiperSlide v-for="item in itemPolitical" :key="item.id">
          <div
            class="p-[20px] border border-[#E9EBF0] text-start rounded-[10px] h-[230px] hover:border-primary duration-200 transition-all cursor-pointer">
            <div class="flex items-center gap-5 mb-3">
              <img
                :src="item.image"
                alt=""
                class="w-12 h-12 object-cover rounded-full" />
              <div>
                <h4>{{ item.name }}</h4>
                <span class="text-sm font-light text-[#4F5665]">{{
                  item.title
                }}</span>
              </div>
            </div>
            <p class="text-start line-clamp-4">{{ item.say }}</p>
          </div>
        </SwiperSlide>
      </swiper>
    </div>
    <Subscribe />
    <Footer />
  </div>
</template>

<script setup>
import Button from '../../components/Button.vue';
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';
import Advisors from '../../components/CardAdvisors.vue';
import Subscribe from '../../components/Subscribe.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Pagination, Navigation, Scrollbar, A11y, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const itemPolitical = [
  {
    id: '1',
    name: 'Airlangga Hartanto',
    title: 'Menteri Koordinator dan Perekonomian RI',
    say: 'Saya minta kepada segenap pengurus DPD, provinsi, kabupten dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c8/KIM_Airlangga_Hartarto.jpg',
  },
  {
    id: '2',
    name: 'Jokowi Dodo',
    title: 'Presiden RI',
    say: 'Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan ',
    image:
      'https://awsimages.detik.net.id/community/media/visual/2021/05/27/presiden-jokowi-1_169.jpeg?w=1200',
  },
  {
    id: '3',
    name: 'Puan Maharani',
    title: 'Ketua DPR dan Fraksi PDI Perjuangan',
    say: 'Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketikaproses demokratisasi berlangsung.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Puan_Maharani%2C_Ketua_DPR_RI.jpg/800px-Puan_Maharani%2C_Ketua_DPR_RI.jpg',
  },
  {
    id: '4',
    name: 'Ganjar Pranowo',
    title: 'Capres RI',
    say: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus, deleniti modi blanditiis provident praesentium tempore harum iste atque totam.',
    image:
      'https://thumbs.viva.co.id/media/frontend/thumbs3/2023/09/29/6516a9d1c8955-ganjar-pranowo-rakernas-pdi-p_663_372.jpg',
  },
];
</script>
