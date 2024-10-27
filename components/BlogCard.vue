<template>
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <img :src="image" :alt="title" class="w-full h-48 object-cover">
    <div class="p-6">
      <time class="text-sm text-gray-500">{{ formatDate(date) }}</time>
      <h3 class="text-xl font-semibold my-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ excerpt }}</p>
      <NuxtLink :to="`/blog/${slug}`" class="text-primary-600 hover:text-primary-700">
        Read More →
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type : String,
      required : true,
    },
    excerpt: String,
    date: {
      type : String,
      required : true,
    },
    image: {
      type : String,
      required : true,
    },
    slug: {
      type : String,
      required : true,
    }
  })

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
</script>