<!-- components/ImageCarousel.vue -->
<template>
  <div class="carousel-container bg-gradient-to-r from-purple-500/20 to-pink-500/20">
    <swiper
      :modules="[SwiperEffectCoverflow, SwiperNavigation, SwiperAutoplay]"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :initialSlide="19"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 20,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1.5,
          }
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 30,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
          }
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 0,
          coverflowEffect: {
            rotate: -20,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }
        }
      }"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(box, index) in boxes" :key="index">
        <div 
          class="slide-container cursor-pointer"
          @click="showAlert(box.number)"
        >
          <div class="box-content">
            <span class="number">{{ box.number }}</span>
          </div>
          <div class="overlay"></div>
        </div>
      </swiper-slide>
    </swiper>
    
    <!-- Custom Navigation Buttons -->
    <button class="custom-prev">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button class="custom-next">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const swiperInstance = ref(null);

// Generate 20 boxes with numbers
const boxes = Array.from({ length: 20 }, (_, i) => ({
  number: i + 1
}));

const showAlert = (number) => {
  alert(`You clicked box number ${number}`);
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  swiper.slideToLoop(19, 0, false);
};
</script>

<style scoped>
.carousel-container {
  @apply relative w-full py-12 overflow-hidden min-h-[400px];
}

.swiper {
  @apply w-full py-8;
}

.swiper-slide {
  @apply w-[300px] h-[300px] transition-all duration-300 ease-in-out;
}

.slide-container {
  @apply relative w-full h-full rounded-xl transition-all duration-300;
}

.box-content {
  @apply w-full h-full rounded-xl bg-white/10 backdrop-blur-md 
         border border-white/20 shadow-lg
         flex items-center justify-center
         transition-all duration-300;
}

.number {
  @apply text-6xl font-bold text-white/90 transition-all duration-300;
}

.overlay {
  @apply absolute inset-0 bg-black/10 backdrop-blur-sm
         rounded-xl pointer-events-none transition-all duration-300;
}

/* Center slide styling */
.swiper-slide-active {
  @apply transform scale-125 z-10;
}

.swiper-slide-active .box-content {
  @apply bg-white/20 backdrop-blur-lg border-white/30;
}

.swiper-slide-active .number {
  @apply text-white scale-110;
}

.swiper-slide-active .overlay {
  @apply opacity-0;
}

/* Side slides styling */
.swiper-slide-prev,
.swiper-slide-next {
  @apply transform scale-90;
}

/* Custom navigation buttons */
.custom-prev,
.custom-next {
  @apply absolute top-1/2 transform -translate-y-1/2
         w-12 h-12 rounded-full
         flex items-center justify-center
         bg-white/20 backdrop-blur-sm
         border border-white/30
         text-white/90 transition-all duration-300
         hover:bg-white/30 hover:scale-110
         focus:outline-none;
}

.custom-prev {
  @apply left-4;
}

.custom-next {
  @apply right-4;
}

.custom-prev:disabled,
.custom-next:disabled {
  @apply opacity-30 cursor-not-allowed;
}
</style>