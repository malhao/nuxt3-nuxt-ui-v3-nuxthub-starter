<script setup lang="ts">
const items = computed(() => [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Blog',
    to: '/blog'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
  {
    label: 'Images',
    to: '/images'
  }
])

</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://www.linkedin.com/in/malhao"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="X"
        color="neutral"
        variant="ghost"
      />

      <UButton
        to="https://github.com/malhao"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />

      <UButton
        label="Sign in"
        color="neutral"
        variant="ghost"
        to="/login"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
    </template>
  </UHeader>
</template>
