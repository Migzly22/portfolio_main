<template>
  <div  class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100 ">
    <div class="flex-1 overflow-y-auto w-screen hideScroll h-full">
      <slot/>
    </div>
    <UContainer class="p-2">
      Buttons
    </UContainer>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .hideScroll{
    scrollbar-width: none;
  }
</style>