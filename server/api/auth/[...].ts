// server/api/auth/[...].ts
export default defineOAuthGitHubEventHandler({
    config: {
        emailRequired: true
    },
    async onSuccess(event, { user }) {
        // Store user session
        await setUserSession(event, {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                login: user.login,
                avatar_url: user.avatar_url
            },
            // You can add more session data
            loggedInAt: new Date()
        })

      await sendRedirect(event, '/login-result')
    }
})
