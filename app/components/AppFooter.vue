<template>
  <USeparator
    icon="i-lucide-bolt"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-[var(--ui-border)]' }">
    <template #left>
      <p class="text-(--ui-text-muted) text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

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
    </template>
  </UFooter>
</template>
<script setup lang="ts">
</script>
