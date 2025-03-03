<script setup lang="ts">
interface Message {
  id: string
  text: string
  created_at: string
}

const { data: messages, refresh } = await useFetch<Message[]>('/api/messages')
const state = reactive({
  message: ''
})

async function handleSubmit() {
  if (!state.message.trim()) return

  try {
    await $fetch('/api/messages', {
      method: 'POST',
      body: {
        text: state.message
      }
    })
    state.message = ''
    await refresh()
    useToast().add({
      title: 'Success',
      description: 'Message sent successfully',
      color: 'primary'
    })
  } catch {
    useToast().add({
      title: 'Error',
      description: 'Failed to send message',
      color: 'error'
    })
  }
}

async function deleteMessage(id: string) {
  try {
    await fetch(`/api/messages/${id}`, {
      method: 'DELETE'
    })
    await refresh()
    useToast().add({
      title: 'Success',
      description: 'Message deleted successfully',
      color: 'primary'
    })
  } catch {
    useToast().add({
      title: 'Error',
      description: 'Failed to delete message',
      color: 'error'
    })
  }
}
</script>

<template>
  <div class="space-y-6">
    <h3 class="text-lg font-semibold">
      Messages
    </h3>

    <UForm
      :state="state"
      @submit="handleSubmit"
      class="space-y-4"
    >
      <UFormField
        name="message"
        label="New Message"
      >
        <UInput
          v-model="state.message"
          placeholder="Type a message"
          trailing-icon="i-lucide-message-square"
        />
      </UFormField>

      <UButton
        type="submit"
        color="primary"
        icon="i-lucide-send"
        label="Send"
        :disabled="!state.message.trim()"
      />
    </UForm>

    <div v-if="messages?.length" class="space-y-2">
      <UCard
        v-for="message in messages"
        :key="message.id"
        class="relative group"
      >
        <div class="flex justify-between items-start gap-4">
          <div class="flex-1 min-w-0">
            <p class="text-sm break-words">
              {{ message.text }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              {{ new Date(message.created_at).toLocaleString() }}
            </p>
          </div>

          <UButton
            color="error"
            variant="ghost"
            size="xs"
            icon="i-lucide-trash-2"
            class="shrink-0 opacity-30 hover:opacity-100 transition-opacity"
            @click="deleteMessage(message.id)"
          />
        </div>
      </UCard>
    </div>

    <UAlert
      v-else
      icon="i-lucide-message-square"
      color="neutral"
      variant="subtle"
      title="No messages"
      text="Start a conversation by sending a message"
    />
  </div>
</template>
