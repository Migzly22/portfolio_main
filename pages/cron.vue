<!-- components/ImageCarousel.vue -->
<template>
  <div class="carousel-container">
    <swiper
      :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :initialSlide="19"
      :loop="true"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(image, index) in displayImages" :key="index">
        <div class="slide-container" :class="{ 'side-slide': true }">
          <img :src="image.url" :alt="image.alt" />
          <div class="overlay"></div>
          <div class="slide-number">{{ image.number }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperInstance = ref(null);

// Generate 20 images with proper numbering
const images = Array.from({ length: 20 }, (_, i) => ({
  number: i + 1,
  url: 'https://i.ibb.co/gyP4Jhy/images.png',
  alt: `Image ${i + 1}`
}));

// Function to get circular index
const getCircularIndex = (index, length) => {
  return ((index % length) + length) % length;
};

// Compute the display images in circular order
const displayImages = computed(() => {
  return images;
});

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  // Set initial slide to show 20-1-2
  swiper.slideToLoop(19, 0, false); // Go to last slide (20) initially
};

onMounted(() => {
  // Additional initialization if needed
});
</script>

<style scoped>
.carousel-container {
  @apply w-full py-12 bg-gray-100 overflow-hidden;
}

.swiper {
  @apply w-full py-7;
}

.swiper-slide {
  @apply bg-center bg-cover w-72 h-72 transition-all duration-300 ease-in-out;
}

.slide-container {
  @apply relative w-full h-full;
}

.slide-container img {
  @apply w-full h-full object-cover rounded-lg;
}

.overlay {
  @apply absolute inset-0 bg-white bg-opacity-50 pointer-events-none transition-opacity duration-300 ease-in-out rounded-lg;
}

.slide-number {
  @apply absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded font-bold z-10;
}

/* Center slide styling */
.swiper-slide-active {
  @apply scale-120 z-10;
}

.swiper-slide-active .overlay {
  @apply opacity-0;
}

/* Side slides styling */
.swiper-slide-prev,
.swiper-slide-next {
  @apply scale-90;
}

.swiper-button-next,
.swiper-button-prev {
  @apply text-gray-800;
}

.swiper-pagination-bullet-active {
  @apply bg-gray-800;
}

/* Proper spacing for scaled center slide */
.swiper-wrapper {
  @apply py-5;
}


</style>