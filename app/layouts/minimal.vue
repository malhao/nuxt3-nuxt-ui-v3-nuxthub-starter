<template>
  <div class="h-screen flex items-center justify-center overlay">
    <UButton
      icon="i-lucide-chevron-left"
      to="/"
      size="xl"
      color="neutral"
      variant="subtle"
      class="absolute left-8 top-8 rounded-full"
    />

    <slot />
  </div>
</template>
