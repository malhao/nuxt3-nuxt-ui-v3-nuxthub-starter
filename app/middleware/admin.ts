// app/middleware/admin.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    return navigateTo('/login')
  }

  // Call the server API to check admin status
  const { data: isUserAdmin } = await useFetch('/api/admin/check')

  if (!isUserAdmin.value) {
    return navigateTo({
      path: '/unauthorized',
      query: { from: to.path }
    })
  }
})
