<template>
  <div>
      <NuxtLayout>
          <NuxtPage />
      </NuxtLayout>
      <UNotifications />
  </div>

</template>

<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loading = ref(true);
  nuxtApp.hook("page:start", () => {
      loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>

<style>

</style>