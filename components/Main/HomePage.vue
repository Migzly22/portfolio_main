<template>
  <div class="h-full flex flex-col items-center justify-center ">
    <UContainer class="text-center ">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        Yahallo, I'm <span class="text-primary-600">Rolly Migriño</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        Full Stack Developer | Mobile Developer | Web Developer
      </p>
      <div class="flex justify-center space-x-4">
        <UButton label="View My Work" class="px-6 py-3" @click="useUseSmoothScroll('viewProjects')"/>
        <UButton label="Get in Touch" variant="outline" class="px-6 py-3"/>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .btn-primary {
    @apply px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
  }

  .btn-secondary {
    @apply px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors;
  }

  .skill-card {
    @apply p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center hover:transform hover:scale-105 transition-transform;
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>