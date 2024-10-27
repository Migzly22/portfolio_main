<template>
  <div class="w-screen min-h-[400px] relative">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="3"
      :centered-slides="true"
      :loop="true"
      :space-between="30"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      class="w-full h-full carousel-swiper"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <div class="transition-all duration-300 h-[400px] relative group">
          <!-- White overlay for non-active slides -->
          <div class="absolute inset-0 bg-white opacity-50 group-[.swiper-slide-active]:opacity-0 transition-opacity duration-300"></div>
          
          <!-- Content container -->
          <div class="w-full h-full bg-red-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-[.swiper-slide-active]:scale-110">
            <strong class="text-white text-2xl">{{ slide }}</strong>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>

</script>

<style scoped>
.carousel-swiper {
  padding: 50px 0;
}

.swiper-slide {
  transition: all 0.3s ease;
}

.swiper-slide-active {
  z-index: 2;
}

/* Ensure proper scaling for adjacent slides */
.swiper-slide-prev,
.swiper-slide-next {
  z-index: 1;
}
</style>