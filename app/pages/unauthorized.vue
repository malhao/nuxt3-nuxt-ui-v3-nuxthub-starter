<!-- pages/unauthorized.vue -->
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'auth'
})

// const fromPath = route.query.from || '/'
</script>

<template>
  <UPageCard
    title="Unauthorized"
    description="You don't have permission to access this page."
    icon="i-lucide-alert-circle"
    variant="subtle"
    highlight
    highlight-color="error"
    :ui="{
      leading: 'w-full flex items-center justify-center mb-2.5',
      leadingIcon: `size-9 shrink-0 block mx-auto text-(--ui-error)`,
      title: 'text-base text-pretty font-semibold text-(--ui-text-highlighted) text-center',
      description: 'text-[15px] text-pretty text-center'
    }"
  />
</template>
