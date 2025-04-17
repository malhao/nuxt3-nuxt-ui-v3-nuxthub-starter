// server/api/admin/setup.post.ts
import { addAdmin } from '../../utils/admins'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validate the secret key
    if (!body.secretKey || body.secretKey !== process.env.ADMIN_SETUP_KEY) {
      throw createError({
        statusCode: 403,
        message: 'Invalid setup key'
      })
    }

    // Check if username exists
    if (!body.username) {
      throw createError({
        statusCode: 400,
        message: 'Username is required'
      })
    }

    // Allow specifying a username for initial setup
    const username = body.username
    await addAdmin(String(username))

    return {
      success: true,
      message: `User '${username}' has been added as admin`
    }
  } catch (error) {
    console.error('Admin setup error:', error)
    throw error
  }
})
