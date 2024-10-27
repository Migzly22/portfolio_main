<template>
  <div 
    ref="sectionRef"
    :class="[
      'transition-all duration-1000',
      animationClass,
      isIntersecting ? 'opacity-100 translate-y-0' : baseClass
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

const props = defineProps({
  animation: {
    type: String,
    default: 'fade-up', // fade-up, fade-left, fade-right, zoom-in
  },
  delay: {
    type: Number,
    default: 0,
  }
})

const sectionRef = ref<HTMLElement | null>(null)
const isIntersecting = useIntersectionObserver(sectionRef)

const baseClass = computed(() => {
  switch (props.animation) {
    case 'fade-up':
      return 'opacity-0 translate-y-16'
    case 'fade-left':
      return 'opacity-0 -translate-x-16'
    case 'fade-right':
      return 'opacity-0 translate-x-16'
    case 'zoom-in':
      return 'opacity-0 scale-95'
    default:
      return 'opacity-0'
  }
})

const animationClass = computed(() => {
  return props.delay ? `delay-${props.delay}` : ''
})
</script>