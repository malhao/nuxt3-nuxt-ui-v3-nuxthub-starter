export const useAdmin = () => {
  const isAdmin = ref(false)
  const isLoading = ref(false)
  const { loggedIn } = useUserSession()

  const checkAdmin = async () => {
    if (!loggedIn.value) {
      isAdmin.value = false
      return
    }

    try {
      isLoading.value = true
      const { data } = await useFetch('/api/admin/check')
      isAdmin.value = !!data.value
    } catch (error) {
      console.error('Failed to check admin status', error)
      isAdmin.value = false
    } finally {
      isLoading.value = false
    }
  }

  // Watch for login changes
  watch(loggedIn, () => {
    if (loggedIn.value) {
      checkAdmin()
    } else {
      isAdmin.value = false
    }
  }, { immediate: true })

  return {
    isAdmin,
    isLoading,
    checkAdmin
  }
}
