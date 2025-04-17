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
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
  ...(isAdmin.value ? [{ label: 'Images', to: '/images' }] : [])
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

      <!-- Replace the Sign in button with AuthState component -->
      <AuthState>
        <template #default="{ loggedIn, user, clear }">
          <div v-if="loggedIn" class="flex items-center gap-2">
            <UDropdownMenu :items="[
              { label: 'Profile', icon: 'i-lucide-user' },
              { label: 'Settings', icon: 'i-lucide-settings' },
              { label: 'Sign out', icon: 'i-lucide-log-out', onSelect: signOut }
            ]">
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

      <!-- Replace the Sign in button with AuthState component in mobile view -->
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
                <div class="text-gray-500 dark:text-gray-400 text-xs" v-if="user?.email">
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
