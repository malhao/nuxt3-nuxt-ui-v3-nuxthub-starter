<script setup lang="ts">
const { signOut } = useAuth()
const { isAdmin } = useAdmin()

const items = computed(() => [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Blog',
    to: '/blog'
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
      <!-- Replace the Sign in button with AuthState component -->
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
            color="neutral"
            variant="ghost"
            to="/login"
          />
        </template>
        <template #placeholder>
          <UButton
            label="Sign in"
            color="neutral"
            variant="ghost"
            disabled
          />
        </template>
      </AuthState>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <AuthState>
        <template #default="{ loggedIn, user }">
          <div v-if="loggedIn" class="flex flex-col gap-3">
            <div class="flex items-center gap-3 px-2">
              <UAvatar
                :src="user?.avatar_url"
                :alt="user?.name || user?.login || 'User'"
                size="sm"
              />
              <div class="text-sm">
                <div class="font-medium">{{ user?.name || user?.login || 'User' }}</div>
                <div v-if="user?.email" class="text-gray-500 dark:text-gray-400 text-xs">
                  {{ user.email }}
                </div>
              </div>
            </div>
            <UButton
              label="Sign out"
              color="neutral"
              variant="subtle"
              block
              @click="signOut"
            />
          </div>
          <UButton
            v-else
            label="Sign in"
            color="neutral"
            variant="subtle"
            to="/login"
            block
            class="mb-3"
          />
        </template>
        <template #placeholder>
          <UButton
            label="Loading..."
            color="neutral"
            variant="subtle"
            disabled
            block
            class="mb-3"
          />
        </template>
      </AuthState>
    </template>
  </UHeader>
</template>
