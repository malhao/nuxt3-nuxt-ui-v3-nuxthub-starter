export const useAuth = () => {
  const router = useRouter()
  const { loggedIn, openInPopup, clear } = useUserSession()

  const signInWithGitHub = () => {
    const checkAuth = setInterval(() => {
      if (window.closed) {
        clearInterval(checkAuth)
        return
      }

      if (loggedIn.value) {
        clearInterval(checkAuth)
        router.push('/')
      }
    }, 1000)

    openInPopup('/api/auth/github')
  }

  const signOut = async () => {
    await clear()

    console.log('loggedIn', loggedIn)

    if (!loggedIn.value) {
      await router.push('/')
    }
  }

  return {
    signInWithGitHub,
    signOut
  }
}
