<script setup lang="ts">
import { z } from 'zod'

const { data: images, refresh } = await useFetch('/api/images')
const isUploading = ref(false)
const selectedFile = ref<File | null>(null)
const state = reactive({
  image: null as File | null
})

const schema = z.object({
  image: z.instanceof(File, { message: 'Image is required' })
})

function onFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files?.[0]) {
    selectedFile.value = input.files[0]
    state.image = input.files[0]
  }
}

async function handleSubmit() {
  if (!state.image) return

  isUploading.value = true
  const upload = useUpload('/api/images/upload', {
    multiple: false
  })

  try {
    await upload(state.image)
    await refresh()
    selectedFile.value = null
    state.image = null
  } catch (error) {
    useToast().add({
      title: 'Upload Failed',
      description: error instanceof Error ? error.message : 'Failed to upload image',
      color: 'error'
    })
  } finally {
    isUploading.value = false
  }
}

async function deleteImage(pathname: string) {
  try {
    await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })
    await refresh()
    useToast().add({
      title: 'Success',
      description: 'Image deleted successfully',
      color: 'primary'
    })
  } catch {
    useToast().add({
      title: 'Error',
      description: 'Failed to delete image',
      color: 'error'
    })
  }
}
</script>

<template>
  <div class="space-y-6">
    <UForm
      :schema="schema"
      :state="state"
      @submit="handleSubmit"
      class="space-y-4"
    >
      <template #default="{ field }">
        <div class="space-y-4">
          <UFormField
            name="image"
            label="Upload an image"
            help="Supported formats: JPG, PNG"
          >
            <UInput
              type="file"
              name="image"
              accept="image/jpg,image/png"
              @change="onFileSelect"
            />
          </UFormField>

          <UButton
            type="submit"
            :loading="isUploading"
            :disabled="!selectedFile"
            icon="i-lucide-upload"
            label="Upload Image"
          />
        </div>
      </template>
    </UForm>

    <div v-if="images?.length" class="grid grid-cols-3 gap-4">
      <UCard
        v-for="image in images"
        :key="image.pathname"
        class="relative group"
      >
        <img
          :src="`/images/${image.pathname}`"
          :alt="image.pathname"
          class="w-full h-48 object-cover"
        >
        <UButton
          color="error"
          variant="soft"
          size="xs"
          icon="i-lucide-trash-2"
          class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          @click="deleteImage(image.pathname)"
        />
      </UCard>
    </div>

    <UAlert
      v-else
      icon="i-lucide-info"
      color="neutral"
      variant="subtle"
      title="No images"
      text="Upload an image to get started"
    />
  </div>
</template>
