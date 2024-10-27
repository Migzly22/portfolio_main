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
  width: 100%;
  padding: 50px 0;
  background: #f5f5f5;
  overflow: hidden;
}

.swiper {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  transition: all 0.3s ease;
}

.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.slide-number {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  z-index: 2;
}

/* Center slide styling */
.swiper-slide-active {
  transform: scale(1.2);
  z-index: 2;
}

.swiper-slide-active .overlay {
  opacity: 0;
}

/* Side slides styling */
.swiper-slide-prev,
.swiper-slide-next {
  transform: scale(0.8);
}

.swiper-button-next,
.swiper-button-prev {
  color: #333;
}

.swiper-pagination-bullet-active {
  background: #333;
}

/* Ensure proper spacing for the scaled center slide */
.swiper-wrapper {
  padding: 20px 0;
}
</style>