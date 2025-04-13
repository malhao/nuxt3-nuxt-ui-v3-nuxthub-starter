<script setup lang="ts">
const { signInWithGitHub } = useAuth()
const isOpen = ref(false)

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Login'
})

const providers = [{
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: signInWithGitHub
}]
</script>

<template>
  <div>
    <UPageCard
      variant="subtle"
      class="max-w-sm w-full"
    >
      <UAuthForm
        :providers="providers"
        title="Sign in"
        icon="i-lucide-lock"
      >
        <template #footer>
          By signing in, you agree to our <ULink
          class="text-primary-500 font-medium"
          @click="isOpen = true"
        >Terms of Service</ULink>.
        </template>
      </UAuthForm>

      <UModal
        v-model:open="isOpen"
        title="Terms of Service"
        description="Last updated 13/04/2025"
        :ui="{
          footer: 'justify-end'
        }"
      >
        <template #body>
          <div class="modal-body max-w-none">
            <p>
              Welcome to Malhao.net! By accessing and using our website and choosing to log in using GitHub's OAuth, you
              agree to the following terms and conditions. Please review them carefully.
            </p>

            <ol>
              <li>
                <h2>OAuth Login & Authorization</h2>
                <ul>
                  <li>By logging in with GitHub’s OAuth, you grant Malhao.net permission to access your GitHub public profile information (such as your username, profile picture, and any public email address).</li>
                  <li>This information is used solely for account identification and to enhance your experience on our platform.</li>
                </ul>
              </li>
              <li>
                <h2>Use of Your Information</h2>
                <ul>
                  <li>The GitHub profile information obtained during login will be used only to display your details on your homepage—for example, alongside your comments on blog posts.</li>
                  <li>Malhao.net will not share, sell, or distribute your GitHub information to any third parties beyond what is necessary to support and personalize your experience on the website.</li>
                </ul>
              </li>
              <li>
                <h2>Privacy and Data Security</h2>
                <ul>
                  <li>Your privacy is important to us. All data received from GitHub is stored securely and is accessible only by authorized personnel at Malhao.net.</li>
                  <li>We do not collect any additional personal data without your explicit consent.</li>
                </ul>
              </li>
              <li>
                <h2>User Responsibilities</h2>
                <ul>
                  <li>You are responsible for the accuracy of the information provided by your GitHub profile.</li>
                  <li>You agree to promptly notify us of any unauthorized use of your account or any other breach of security.</li>
                </ul>
              </li>
              <li>
                <h2>Modifications to These Terms</h2>
                <ul>
                  <li>Malhao.net reserves the right to update these Terms of Service at any time. Any changes will be effective immediately upon posting on our website.</li>
                  <li>Your continued use of Malhao.net after any modifications are posted constitutes your acceptance of the revised terms.</li>
                </ul>
              </li>
              <li>
                <h2>Acceptance</h2>
                <ul>
                  <li>By logging in via GitHub OAuth and using Malhao.net, you acknowledge that you have read, understood, and agree to these Terms of Service.</li>
                </ul>
              </li>
              <li>
                <h2>Contact Information</h2>
                <ul>
                  <li>If you have any questions or concerns about these Terms, please contact us at: <strong>Email:</strong> alex@malhao.net</li>
                </ul>
              </li>
            </ol>
          </div>
        </template>

        <template #footer>
          <UButton label="Close" color="neutral" @click="isOpen = false" />
        </template>
      </UModal>
    </UPageCard>
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
