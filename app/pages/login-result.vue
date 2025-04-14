<script setup lang="ts">
const { loggedIn } = useUserSession()
const { data: page } = await useAsyncData('login-result', () => queryCollection('login_result').first())

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: `${page.value?.title} ${loggedIn.value ? 'Success' : 'Failed'}`,
})

const content = computed(() =>
  loggedIn.value ? page.value?.success : page.value?.failure
)
</script>

<template>
  <UPageCard
    v-if="page && content"
    :title="content.title"
    :description="content.description"
    :icon="content.icon"
    variant="subtle"
    highlight
    :highlight-color="content.color"
    :ui="{
      leading: 'w-full flex items-center justify-center mb-2.5',
      leadingIcon: `size-9 shrink-0 block mx-auto text-(--ui-${content.color})`,
      title: 'text-base text-pretty font-semibold text-(--ui-text-highlighted) text-center',
      description: 'text-[15px] text-pretty text-center'
    }"
  />
</template>
