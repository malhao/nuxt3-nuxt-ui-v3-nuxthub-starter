<script setup lang="ts">
const { signInWithGitHub } = useAuth()
const { data: page } = await useAsyncData('login', () => queryCollection('login').first())

definePageMeta({
  layout: 'minimal'
})

useSeoMeta({
  title: page.value?.title
})

const providers = page.value?.providers?.map(provider => ({
  label: provider.label,
  icon: provider.icon,
  onClick: signInWithGitHub
})) || []
</script>

<template>
  <UPageCard
    variant="subtle"
    class="max-w-sm w-full"
  >
    <UAuthForm
      :providers="providers"
      :title="page.title"
      icon="i-lucide-lock"
    />
    <TermsOfServiceModal />
  </UPageCard>
</template>
