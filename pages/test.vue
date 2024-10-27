<!-- components/ImageCarousel.vue -->
<template>
  <div class="carousel-container">
    <swiper
      :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :initialSlide="9"
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
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="slide-container" :class="{ 'side-slide': true }">
          <img :src="image.url" :alt="image.alt" />
          <div class="overlay"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const swiperInstance = ref(null);

const images = [
  
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 1' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 2' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 3' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 4' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature ' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 51' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 1234' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 1' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 21' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 13' },
  { url: 'https://i.ibb.co/gyP4Jhy/images.png', alt: 'Nature 14' },

  // Add more images to reach 20 items total
];

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  
  // Set initial slide to show 20-1-2
  const startIndex = images.length - 1; // Index for image 20
  swiper.slideToLoop(startIndex, 0, false);
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  padding: 50px 0;
  background: #f5f5f5;
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
</style>