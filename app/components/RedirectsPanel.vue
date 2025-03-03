<script setup lang="ts">
const { data: redirects, refresh } = await useFetch('/api/redirects', {
  transform: (data: { [key: string]: string }) => {
    return { text: Object.entries(data).map(([from, to]) => `${from} ${to}`).join('\n') }
  }
})

const state = reactive({
  redirects: ''
})

// Initialize state when data is loaded
watchEffect(() => {
  if (redirects.value?.text) {
    state.redirects = redirects.value.text
  }
})

async function handleSubmit() {
  const body = Object.fromEntries(
    state.redirects.split('\n')
      .filter(line => line.trim())
      .map(line => line.split(' '))
  )

  try {
    await $fetch('/api/redirects', {
      method: 'PUT',
      body
    })
    await refresh()
    useToast().add({
      title: 'Success',
      description: 'Redirects updated successfully',
      color: 'primary'
    })
  } catch (error) {
    useToast().add({
      title: 'Error',
      description: 'Failed to update redirects',
      color: 'error'
    })
  }
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold">
      Server redirects
    </h3>

    <UForm
      :state="state"
      @submit="handleSubmit"
    >
      <UFormField
        name="redirects"
        label="Redirects Configuration"
        help="One redirect per line in format: /from /to"
      >
        <UTextarea
          v-model="state.redirects"
          :rows="6"
          placeholder="/from /to"
        />
      </UFormField>

      <UButton
        type="submit"
        color="primary"
        icon="i-lucide-save"
        label="Save redirects"
      />
    </UForm>
  </div>
</template>
