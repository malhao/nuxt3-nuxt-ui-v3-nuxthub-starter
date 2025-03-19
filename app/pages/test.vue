<template>
  <main>
    <UContainer>
      <UCard class="mt-10">
        <div class="flex flex-col items-center justify-center gap-4">
          <h1 class="font-bold text-2xl text-(--ui-primary)">
            Nuxt UI v3
          </h1>

          <div class="flex items-center gap-2">
            <UButton
              label="Documentation"
              icon="i-lucide-square-play"
              to="https://ui3.nuxt.dev/getting-started/installation/nuxt"
              target="_blank"
            />

            <UButton
              label="GitHub"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-github"
              to="https://github.com/nuxt/ui"
              target="_blank"
            />
          </div>
        </div>
      </UCard>

      <UCard class="mt-10">
        <RedirectsPanel />
      </UCard>

      <UCard class="mt-10">
        <MessagesPanel />
      </UCard>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
</script>
