<script setup lang="ts">
const isOpen = ref(false)
const { data: termsContent } = await useAsyncData('terms', () => queryCollection('terms').first())
</script>

<template>
  <div>
    <p class="text-sm text-(--ui-text-muted) text-center" v-if="termsContent">
      {{ termsContent.agreementText }}
      <ULink
        class="text-primary-500 font-medium"
        @click="isOpen = true"
      >
        {{ termsContent.agreementLinkText }}
      </ULink>.
    </p>

    <UModal
      v-if="termsContent"
      v-model:open="isOpen"
      :title="termsContent.title"
      :description="termsContent.lastUpdated"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <div class="modal-body max-w-none">
          <p>{{ termsContent.introduction }}</p>

          <ol>
            <li v-for="(section, index) in termsContent.sections" :key="index">
              <h2>{{ section.title }}</h2>
              <ul>
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </li>
          </ol>
        </div>
      </template>

      <template #footer>
        <UButton label="Close" color="neutral" @click="isOpen = false" />
      </template>
    </UModal>
  </div>
</template>

<style scoped>
  .modal-body h2 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .modal-body p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .modal-body ol {
    list-style-type: none;
    counter-reset: item;
    padding-left: 0;
  }

  .modal-body ol > li {
    counter-increment: item;
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }

  .modal-body ol > li::before {
    content: counter(item) ".";
    position: absolute;
    left: 0;
    font-size: 1rem;
    font-weight: bold;
    color: currentColor;
  }
</style>
