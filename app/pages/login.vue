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
  <UPageCard
    variant="subtle"
    class="max-w-sm w-full"
  >
    <UAuthForm
      :providers="providers"
      title="Welcome back"
      icon="i-lucide-lock"
    >
      <template #password-hint>
        <ULink
          to="/"
          class="text-primary-500 font-medium"
        >Forgot password?</ULink>
      </template>

      <template #footer>
        By signing in, you agree to our <ULink
        to="/"
        class="text-primary-500 font-medium"
      >Terms of Service</ULink>.
      </template>
    </UAuthForm>
  </UPageCard>
</template>
