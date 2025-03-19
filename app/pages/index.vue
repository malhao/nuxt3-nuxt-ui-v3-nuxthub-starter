<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})
</script>

<template>
  <UPageHero
    :title="page?.hero.title"
    :description="page?.hero.description"
    :headline="page?.hero.headline"
    :links="page?.hero.links"
    orientation="horizontal"
    reverse
  >
    <template #top>
      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />

      <StarsBg />
    </template>

    <img
      :src="'images/alex-portrait.png'"
      alt="Alex Malhao's portrait photo"
      class="rounded-lg shadow-2xl ring ring-(--ui-border)"
    >
  </UPageHero>
</template>
