<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const { signOut } = useAuth()
const { isAdmin } = useAdmin()

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="primary"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <AuthState>
          <template #default="{ loggedIn, user }">
            <div v-if="loggedIn" class="flex items-center gap-2">
              <UDropdownMenu
                :items="[
                ...(isAdmin ? [{ label: 'Images', icon: 'i-lucide-images', key: 'images', to: '/images' }] : []),
                { label: 'Sign out', icon: 'i-lucide-log-out', key: 'sign-out', onSelect: signOut }
              ]"
              >
                <UAvatar
                  :src="user?.avatar_url"
                  :alt="user?.name || user?.login || 'User'"
                  size="sm"
                  class="cursor-pointer hover:opacity-80"
                />
              </UDropdownMenu>
            </div>

            <UButton
              v-else
              label="Sign in"
              to="/login"
              size="md"
              variant="soft"
              color="neutral"
              class="font-bold rounded-full"
            />
          </template>
        </AuthState>
      </template>
    </UNavigationMenu>
  </div>
</template>
