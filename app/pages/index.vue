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
  <div>
    <UPageHero
      :headline="page?.hero.headline"
      :title="page?.hero.title"
      :description="page?.hero.description"
      :links="page?.hero.links"
      orientation="horizontal"
      reverse
    >
      <template #title>
        <MDC :value="page?.hero.title" />
      </template>

      <template #description>
        <MDC :value="page?.hero.description" />
      </template>

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

    <UPageSection title="My technologies stack">
      <UPageMarquee>
        <UIcon name="i-simple-icons-javascript" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-vuedotjs" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-nuxt" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-vuetify" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-tailwindcss" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-nodedotjs" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-postgresql" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-mongodb" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-docker" class="size-10 shrink-0" />
        <UIcon name="i-mdi-microsoft-azure" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-strapi" class="size-10 shrink-0" />
        <UIcon name="i-simple-icons-puppeteer" class="size-10 shrink-0" />
      </UPageMarquee>
    </UPageSection>
  </div>
</template>
