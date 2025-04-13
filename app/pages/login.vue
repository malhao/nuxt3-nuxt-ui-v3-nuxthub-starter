<script setup lang="ts">
const { signInWithGitHub } = useAuth()

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Login'
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
        title="Sign in with"
        icon="i-lucide-lock"
      />
      <TermsOfServiceModal />
    </UPageCard>
  </div>
</template>
