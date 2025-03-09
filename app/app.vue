<script setup lang="ts">
useSeoMeta({
  title: 'Alex Malhao',
  description: 'Personal blog and portfolio of Alex Malhao',
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
