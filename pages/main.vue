<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Yahallo, I'm <span class="text-primary-600">Rolly Migriño</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Full Stack Developer | Mobile Developer | Web Developer
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink
            to="/projects"
            class="btn-primary"
          >
            View My Work
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-secondary"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            class="skill-card"
          >
            <component :is="skill.icon" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            v-bind="project"
          />
        </div>
      </div>
    </section>

    <!-- Blog Preview -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="post in latestPosts"
            :key="post.id"
            v-bind="post"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = [
  {
    name: 'Frontend Development',
    description: 'Vue.js, React, Nuxt.js, TailwindCSS',
    icon: 'IconCode'
  },
  {
    name: 'Backend Development',
    description: 'Node.js, Express, PostgreSQL, MongoDB',
    icon: 'IconServer'
  },
  {
    name: 'DevOps',
    description: 'Docker, CI/CD, AWS, Digital Ocean',
    icon: 'IconCloud'
  },
  {
    name: 'Mobile Development',
    description: 'React Native, Flutter',
    icon: 'IconMobile'
  }
]

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Vue.js and Node.js',
    image: '/projects/ecommerce.jpg',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '/projects/ecommerce'
  },
  // Add more projects...
]

const latestPosts = [
  {
    id: 1,
    title: 'Building Scalable Vue.js Applications',
    excerpt: 'Learn how to structure large-scale Vue.js applications...',
    date: '2024-03-15',
    image: '/blog/vue-scaling.jpg',
    slug: 'building-scalable-vue-applications'
  },
  // Add more posts...
]
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