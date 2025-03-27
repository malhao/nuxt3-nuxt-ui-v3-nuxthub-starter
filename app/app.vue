<script setup lang="ts">
useSeoMeta({
  title: 'Alex Malhao',
  description: 'Personal blog and portfolio of Alex Malhao',
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #ff7e29 0%, #ff9a3b 50%, #ffb64d 100%)" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
