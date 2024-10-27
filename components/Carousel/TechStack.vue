<template>
  <div class="relative w-full px-16 py-8 overflow-hidden bg-white">
    <h2 class="text-3xl font-bold text-center mb-12">Web and Mobile Development Technologies</h2>
    <Swiper
      :modules="[SwiperEffectCoverflow, SwiperNavigation, SwiperAutoplay]"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      class="p-5"
    >
      <SwiperSlide v-for="(card, index) in infiniteCards" :key="index">
        <UCard class="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden pointer-events-none">
          <NuxtImg :src="card.images" class="w-full h-64 object-fill"/>
          <h3 class="text-lg font-semibold">{{ card.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ card.description }}</p>
        </UCard>
      </SwiperSlide>
    </Swiper>

    <!-- <button class="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button class="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperInstance = ref(null);

const baseCards = [
    {
        title: "Ant Design",
        description: "UI Library",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCXvV3U7tyL5F6rYXE93nM4yEw9RJrK1JIQ&s"
    },
    {
        title: "Flutter",
        description: "Framework / UI Library",
        images: "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg"
        
    },
    {
        title: "Nuxt.js",
        description: "Framework / Tech Stack",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0qFfPk8Bi73rc9RVTRYgAg7V347XqeOTBA&s"
        
    },
    {
        title: "Node.js",
        description: "Runtime Environment / Tech Stack",
        images: "https://media.licdn.com/dms/image/v2/D4D12AQF1btzrvx64aQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698242399109?e=2147483647&v=beta&t=_V-6ub-4NLvaWr2Nmoj4IhUoIP4QyrUTx-GBQXWXQQs"
        
    },
    {
        title: "PHP",
        description: "Programming Language",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQwZSg5p0Gq6t5y9NIY9zlbUpTxI-vwvULQ&s"
        
    },
    {
        title: "JavaScript (JS)",
        description: "Programming Language",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
        
    },
    {
        title: "TypeScript",
        description: "Programming Language / Superset",
        images: "https://www.datocms-assets.com/48401/1628645197-learn-typescript.png"
        
    },
    {
        title: "PostgreSQL",
        description: "Database",
        images: "https://btech.id/media/images/Page/2023/07/07/postgres-2583895412"
        
    },
    {
        title: "MySQL",
        description: "Database",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8MDmwKHU2ULG4dr_acqDRj9lhvFAQzvC8A&s"
        
    },
    {
        title: "Tailwind CSS",
        description: "CSS Framework",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKz4NbsiYyG4QdDkxTzbMN5L8Tbd4j1fjxqQ&s"
    }
]
const infiniteCards = computed (() => {
  return Array(3).fill(null).flatMap(() => 
    baseCards.map((card : any, index : any) => ({
      ...card,
      uniqueId: crypto.randomUUID()
    }))
  );
});

</script>

<style scoped>
.card-carousel-container {
  width: 100;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-description {
  font-size: 0.875rem;
  color: #666;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #333;
}

:deep(.swiper-pagination-bullet-active) {
  background: #333;
}
</style>