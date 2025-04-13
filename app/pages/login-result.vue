<script setup lang="ts">
const { loggedIn } = useUserSession()

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: `Login ${loggedIn ? 'Success' : 'Failed'}`,
})

</script>

<template>
  <UPageCard
    :title="loggedIn ? 'Authentication Successful' : 'Authentication Failed'"
    :description="loggedIn ? 'You can close this window now.' : 'Please try signing in again.'"
    :icon="loggedIn ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
    variant="subtle"
    highlight
    :highlight-color="loggedIn ? 'success' : 'error'"
    :ui="{
      leading: 'w-full flex items-center justify-center mb-2.5',
      leadingIcon: `size-9 shrink-0 block mx-auto text-(--ui-${loggedIn ? 'success' : 'error'})`,
      title: 'text-base text-pretty font-semibold text-(--ui-text-highlighted) text-center',
      description: 'text-[15px] text-pretty text-center'
    }"
  />
</template>
