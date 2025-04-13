<script setup lang="ts">
const { signInWithGitHub } = useAuth()
const { data: page } = await useAsyncData('login', () => queryCollection('login').first())

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: page.value?.title
})

const providers = [{
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: signInWithGitHub
}]
</script>

<template>
  <div>
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
  </div>
</template>
