<script setup lang="ts">
const { data: page } = await useAsyncData('images', () => queryCollection('images').first())

definePageMeta({
  middleware: ['admin']
})

useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})

</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="page?.title" :description="page?.description" />

      <UPageBody>
        <ImageGallery />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
